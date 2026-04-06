// Mock PayU Hash Generator for Demo Purposes ONLY.
// IN PRODUCTION, THIS MUST BE DONE ON A SECURE BACKEND TO PROTECT THE SALT.
const PAYU_MERCHANT_KEY = import.meta.env.VITE_PAYU_MERCHANT_KEY;
const PAYU_MERCHANT_SALT = import.meta.env.VITE_PAYU_MERCHANT_SALT;
const PAYU_BASE_URL = import.meta.env.VITE_PAYU_BASE_URL;

export const generateHash = async (txnid, amount, productinfo, firstname, email) => {
  // Hash sequence: key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||SALT
  const hashString = `${PAYU_MERCHANT_KEY}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${PAYU_MERCHANT_SALT}`;
  
  const encoder = new TextEncoder();
  const data = encoder.encode(hashString);
  
  // SHA-512 hash using Web Crypto API
  const hashBuffer = await crypto.subtle.digest('SHA-512', data);
  
  // Convert buffer to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return hashHex;
};
