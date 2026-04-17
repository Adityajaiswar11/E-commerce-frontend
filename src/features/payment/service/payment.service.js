import { API_INSTANCE } from "../../../config/axios";
import { ENDPOINTS } from "../../../config/endpoin.config";

// ─── Standard Checkout ────────────────────────────────────────────────────────

export const createOrder = async (amount) => {
  try {
    const response = await API_INSTANCE.post(ENDPOINTS.CREATE_ORDER, { amount });
    return response.data;
  } catch (error) {
    console.error("createOrder error:", error);
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await API_INSTANCE.post(ENDPOINTS.VERIFY_PAYMENT, paymentData);
    return response.data;
  } catch (error) {
    console.error("verifyPayment error:", error);
  }
};

// ─── UPI Intent S2S ───────────────────────────────────────────────────────────

/**
 * Creates a Razorpay order + S2S UPI Intent payment on the backend.
 * Returns { payment_id, intent_url } where intent_url is a "upi://pay?..." deep link.
 */
export const createUpiIntent = async (amount, contact, email) => {
  try {
    const response = await fetch(`${BASE_URL}/upi-intent`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ amount, contact, email }),
    });
    return await response.json();
  } catch (error) {
    console.error("createUpiIntent error:", error);
    throw error;
  }
};

/**
 * Polls the backend for the current status of a Razorpay payment.
 * Returns { status: "created" | "captured" | "failed", payment }
 */
export const getPaymentStatus = async (paymentId) => {
  try {
    const response = await fetch(`${BASE_URL}/status/${paymentId}`, {
      method: "GET",
      headers: authHeaders,
    });
    return await response.json();
  } catch (error) {
    console.error("getPaymentStatus error:", error);
    throw error;
  }
};