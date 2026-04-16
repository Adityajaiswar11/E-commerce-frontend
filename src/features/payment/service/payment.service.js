const BASE_URL = "http://localhost:5000/api/payment";
const AUTH_TOKEN = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWRmZjc2OGE5MjkzYTQ1YzVjYjYxOWUiLCJpYXQiOjE3NzYyODU1NjIsImV4cCI6MTc3Njg5MDM2Mn0.cGg49rL8m8KVZuCoMhJ-qAx0zaycz-fZB0N8jf9_sRE`;

const authHeaders = {
  "Content-Type": "application/json",
  "Authorization": AUTH_TOKEN,
};

// ─── Standard Checkout ────────────────────────────────────────────────────────

export const createOrder = async (amount) => {
  try {
    const response = await fetch(`${BASE_URL}/create-order`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify({ amount }),
    });
    return await response.json();
  } catch (error) {
    console.error("createOrder error:", error);
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await fetch(`${BASE_URL}/verify`, {
      method: "POST",
      headers: authHeaders,
      body: JSON.stringify(paymentData),
    });
    return await response.json();
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