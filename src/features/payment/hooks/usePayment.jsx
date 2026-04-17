import { useNavigate } from "react-router-dom";
import { createOrder, verifyPayment, createUpiIntent, getPaymentStatus } from "../service/payment.service";
import { loadRazorpay } from "../../../utils/razorpay";
import { toast } from "react-toastify";
import { useIsMobile } from "../../../hooks/isMobile";

export const usePayment = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // ─── Standard Razorpay Checkout (desktop + fallback) ────────────────────────

  const startPayment = async (amount) => {
    try {
      const { order, key } = await createOrder(amount);

      if (!order) {
        toast.error("Failed to create order");
        return;
      }

      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        toast.error("Razorpay SDK failed to load");
        return;
      }

      const options = {
        key: key,
        amount: order.amount,
        currency: order.currency,
        name: "My Store",
        order_id: order.id,

        handler: (response) => {
          verifyPayments({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
        },
      };

      const paymentObject = new window.Razorpay(options);

      paymentObject.on("payment.failed", function (response) {
        console.error(response.error.metadata);
        toast.error(response.error.description || "Payment failed");
        paymentObject.close();
        navigate("/payment-failed");
      });

      paymentObject.open();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  // ─── UPI Intent S2S (mobile only) ───────────────────────────────────────────

  /**
   * Starts a UPI Intent payment.
   * - Calls backend to get a upi:// deep link
   * - Opens link to launch UPI app (GPay, PhonePe, BHIM etc.)
   * - Polls backend every 2 seconds for up to 3 minutes to detect completion
   */
  const startUpiPayment = async (amount, contact = "9876543210", email = "user@example.com") => {
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
    }
  };

  /**
   * Polls GET /api/payment/status/:paymentId every 2 seconds.
   * Stops after 3 minutes (90 attempts) or on terminal status (captured/failed).
   */
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
            navigate(`/payment-success?payment_id=${paymentId}`);
            resolve("captured");

          } else if (status === "failed") {
            clearInterval(poll);
            toast.error("Payment failed. Please try again.");
            navigate("/payment-failed");
            resolve("failed");

          } else if (attempts >= MAX_ATTEMPTS) {
            clearInterval(poll);
            toast.warning("Payment status unknown. We'll notify you by email.");
            navigate("/");
            resolve("timeout");
          }
          // status === "created" → still pending, keep polling

        } catch (err) {
          console.error("Polling error:", err);
          if (attempts >= MAX_ATTEMPTS) {
            clearInterval(poll);
            resolve("error");
          }
        }
      }, INTERVAL_MS);
    });
  };

  // ─── Shared verify (Standard Checkout) ──────────────────────────────────────

  const verifyPayments = async (paymentData) => {
    try {
      const data = await verifyPayment(paymentData);
      if (data.success) {
        toast.success("Payment verified successfully");
        navigate(`/payment-success?payment_id=${paymentData.razorpay_payment_id}`);
      } else {
        toast.error(data.message || "Verification failed");
        navigate(`/payment-failed?payment_id=${paymentData.razorpay_payment_id}`);
      }
    } catch (err) {
      toast.error("Verification error");
      navigate(`/payment-failed?payment_id=${paymentData.razorpay_payment_id}`);
    }
  };

  return { startPayment, startUpiPayment, isMobile };
};