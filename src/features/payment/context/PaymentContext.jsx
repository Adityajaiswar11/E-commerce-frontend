import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createOrder, verifyPayment, createUpiIntent, getPaymentStatus } from "../service/payment.service";
import { loadRazorpay } from "../../../utils/razorpay";
import { toast } from "react-toastify";
import { useIsMobile } from "../../../hooks/isMobile";
import { clearCart } from "../../../utils/localStorage";
import { Context } from '../../../utils/Constant';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setCart } = useContext(Context);

  // ─── Standard Razorpay Checkout (desktop + fallback) ────────────────────────

  const startPayment = async (amount) => {
    setIsLoading(true);
    try {
      const res = await createOrder(amount);
      const order = res.data.order;
      console.log("order", order);
      setOrderData(order);
      
      if (!order) {
        setIsLoading(false);
        return;
      }

      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        toast.error("Razorpay SDK failed to load");
        setIsLoading(false);
        return;
      }

      const options = {
        key: res.data.key,
        amount: order.amount,
        currency: order.currency,
        name: "My Store",
        order_id: order.payment_order_id,

        handler: (response) => {
          const paymentData = {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          };
          handlePaymentSuccess(paymentData);
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.failed", function (response) {
        const paymentData = {
          razorpay_order_id: response.error.metadata.order_id,
          razorpay_payment_id: response.error.metadata.payment_id,
        };
        handlePaymentSuccess(paymentData);
      });

      // Once the modal opens, we can technically stop the loading spinner
      paymentObject.open();
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
      setIsLoading(false);
    }
  };

  // ─── UPI Intent S2S (mobile only) ───────────────────────────────────────────

  const startUpiPayment = async (amount, contact = "9876543210", email = "user@example.com") => {
    setIsLoading(true);
    const toastId = toast.loading("Initiating UPI payment…");

    try {
      // 1. Get intent URL from backend
      const result = await createUpiIntent(amount, contact, email);

      if (!result?.intent_url || !result?.payment_id) {
        toast.update(toastId, {
          render: "Failed to generate UPI intent. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        setIsLoading(false);
        return;
      }

      const { intent_url, payment_id } = result;

      toast.update(toastId, {
        render: "Opening your UPI app…",
        type: "info",
        isLoading: false,
        autoClose: 2000,
      });

      // 2. Open the UPI deep link — launches GPay/PhonePe/BHIM
      window.location.href = intent_url;

      // 3. Start polling for payment status
      await pollPaymentStatus(payment_id);
    } catch (err) {
      console.error("UPI payment error:", err);
      toast.update(toastId, {
        render: "Something went wrong with UPI payment",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      setIsLoading(false);
    }
  };

  const pollPaymentStatus = (paymentId) => {
    return new Promise((resolve) => {
      let attempts = 0;
      const MAX_ATTEMPTS = 90; // 3 minutes at 2s intervals
      const INTERVAL_MS = 2000;

      const poll = setInterval(async () => {
        attempts++;

        try {
          const { status } = await getPaymentStatus(paymentId);

          if (status === "captured") {
            clearInterval(poll);
            toast.success("Payment successful!");
            setIsLoading(false);
            navigate(`/payment-success?payment_id=${paymentId}`);
            resolve("captured");
          } else if (status === "failed") {
            clearInterval(poll);
            toast.error("Payment failed. Please try again.");
            setIsLoading(false);
            navigate("/payment-failed");
            resolve("failed");
          } else if (attempts >= MAX_ATTEMPTS) {
            clearInterval(poll);
            toast.warning("Payment status unknown. We'll notify you by email.");
            setIsLoading(false);
            navigate("/");
            resolve("timeout");
          }
          // status === "created" → still pending, keep polling

        } catch (err) {
          console.error("Polling error:", err);
          if (attempts >= MAX_ATTEMPTS) {
            clearInterval(poll);
            setIsLoading(false);
            resolve("error");
          }
        }
      }, INTERVAL_MS);
    });
  };

  // ─── Shared verify (Standard Checkout) ──────────────────────────────────────

  const redirectTo = async (orderId, amount, currency, isSuccess) => {
    setIsLoading(false);
    if (isSuccess) {
      navigate(`/payment-success?order_id=${orderId}&amount=${amount}&currency=${currency}`);
      clearCart();
    } else {
      navigate(`/payment-failed?order_id=${orderId}&amount=${amount}&currency=${currency}`);
    }
  };

  const handlePaymentSuccess = async (response) => {
    setIsLoading(true);
    try {
      const res = await verifyPayment(response);
      if (res.success === true) {
        navigate(`/payment-success?order_id=${res.data.payment_order_id}&amount=${res.data.amount}&currency=${res.data.currency}`);
        clearCart();
        setCart({});
        setOrderData(null);
      } else {
        navigate(`/payment-failed?order_id=${res.data.payment_order_id}&amount=${res.data.amount}&currency=${res.data.currency}`);
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PaymentContext.Provider value={{
      orderData,
      isLoading,
      startPayment,
      startUpiPayment,
      handlePaymentSuccess,
      isMobile
    }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
