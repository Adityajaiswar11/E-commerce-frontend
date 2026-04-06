import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../utils/Constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { generateHash } from "../utils/payu";

const Checkout = () => {
  const { cart, product, userLog, user } = useContext(Context);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    firstname: user?.name || "",
    email: user?.email || "",
    phone: "",
  });
  
  const [payuData, setPayuData] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (!userLog) {
      toast.error("Please login to checkout", { autoClose: 1500 });
      navigate("/login");
      return;
    }

    if (!cart.item || Object.keys(cart.item).length === 0) {
      navigate("/cart");
      return;
    }

    let sum = 0;
    Object.keys(cart.item).forEach((id) => {
      const itemPrice = product.find(p => p.id.toString() === id)?.price || 0;
      sum += itemPrice * cart.item[id];
    });
    setTotalAmount(sum);
  }, [cart, userLog, navigate, product]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!formData.firstname || !formData.email || !formData.phone) {
      toast.error("Please fill in all details");
      return;
    }

    const txnid = "TXN" + Date.now() + Math.floor(Math.random() * 1000);
    const productinfo = "EazyShop_Order";

    try {
      const hash = await generateHash(
        txnid,
        totalAmount,
        productinfo,
        formData.firstname,
        formData.email
      );

      setPayuData({
        key: import.meta.env.VITE_PAYU_MERCHANT_KEY,
        txnid,
        amount: totalAmount,
        productinfo,
        firstname: formData.firstname,
        email: formData.email,
        phone: formData.phone,
        surl: window.location.origin + "/payment/success", // Will fail since no backend, but expected by PayU
        furl: window.location.origin + "/payment/failure",
        hash,
      });

    } catch (err) {
      console.error(err);
      toast.error("Error generating payment request");
    }
  };

  // Automatically submit the form to PayU once the data and hash are ready
  useEffect(() => {
    if (payuData && formRef.current) {
      formRef.current.submit();
    }
  }, [payuData]);

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-12 px-4 md:px-8 text-white flex justify-center">
      <div className="max-w-xl w-full bg-dark-card border border-dark-border rounded-2xl p-8 shadow-card">
        <h1 className="text-3xl font-display font-bold mb-6 text-center">Secure Checkout</h1>
        
        <div className="bg-dark-bg border border-dark-border rounded-xl p-4 mb-6 text-center">
          <p className="text-gray-400 text-sm mb-1">Total Amount Payable</p>
          <h2 className="text-3xl font-bold text-white">₹{totalAmount}</h2>
        </div>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleInputChange}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
              placeholder="9876543210"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 rounded-xl shadow-glow transition-colors mt-6"
          >
            Pay Now with PayU
          </button>
        </form>

        {/* Hidden Form to redirect to PayU */}
        {payuData && (
          <form ref={formRef} action={import.meta.env.VITE_PAYU_BASE_URL} method="post" className="hidden">
            <input type="hidden" name="key" value={payuData.key} />
            <input type="hidden" name="txnid" value={payuData.txnid} />
            <input type="hidden" name="productinfo" value={payuData.productinfo} />
            <input type="hidden" name="amount" value={payuData.amount} />
            <input type="hidden" name="email" value={payuData.email} />
            <input type="hidden" name="firstname" value={payuData.firstname} />
            <input type="hidden" name="phone" value={payuData.phone} />
            <input type="hidden" name="surl" value={payuData.surl} />
            <input type="hidden" name="furl" value={payuData.furl} />
            <input type="hidden" name="hash" value={payuData.hash} />
          </form>
        )}
      </div>
    </div>
  );
};

export default Checkout;
