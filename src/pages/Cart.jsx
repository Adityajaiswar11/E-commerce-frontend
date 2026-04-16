/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Constant";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { usePayment } from "../features/payment/hooks/usePayment";

const Cart = () => {
  let totalItemPrice = 0;
  const { cart, product, setCart, userLog } = useContext(Context);
  const [close, setClose] = useState(false);
  const [deleteid, setDeleteit] = useState();
  const [filterdata, setFilterData] = useState([]);

  const navigate = useNavigate();
  const { startPayment, startUpiPayment, isMobile } = usePayment();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!cart.item) return;

    const id = Object.keys(cart.item);
    const total = product.filter((item) => id.includes(item.id.toString()));
    setFilterData(total);
  }, [cart, product]);

  const removeItem = () => {
    const addCart = { ...cart };
    let remove = cart.item[deleteid];
    delete cart.item[deleteid];
    addCart.totalitem -= remove;
    setCart(addCart);

    const newData = filterdata.filter((d) => d.id !== deleteid);
    setFilterData(newData);
    setClose(false);
  };

  const totalItem = (id) => cart.item[id];

  const increamentCart = (id) => {
    let Qauntity = cart.item[id];
    let cartItem = { ...cart };
    cartItem.item[id] = Qauntity + 1;
    cartItem.totalitem += 1;
    setCart(cartItem);
  };

  const decreamentCart = (id) => {
    let Qauntity = cart.item[id];
    let cartItem = { ...cart };
    if (cartItem.item[id] === 1) return;
    cartItem.item[id] = Qauntity - 1;
    cartItem.totalitem -= 1;
    setCart(cartItem);
  };

  const totalPrice = (price, id) => {
    let sum = totalItem(id) * price;
    totalItemPrice += sum;
    return sum;
  };

  const handleOrder = () => {
    startPayment(+totalItemPrice);
  };

  const handleUpiOrder = () => {
    startUpiPayment(+totalItemPrice);
  };

  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-12 px-4 md:px-8 text-white relative">
      {filterdata.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <div className="w-64 h-64 bg-dark-card border border-dark-border rounded-full flex items-center justify-center mb-8">
            <svg className="w-32 h-32 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-display font-bold mb-4">Your cart is empty</h1>
          <p className="text-gray-400 mb-8 max-w-md text-center">Looks like you haven't added anything to your cart yet. Browse our products and find something you love!</p>
          <Link to="/product" className="px-8 py-3 bg-primary hover:bg-primary-hover rounded-lg font-semibold shadow-glow transition-all">
            Continue Shopping
          </Link>
        </div>
      ) : (
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">

            {/* Cart Items Section */}
            <div className="lg:w-2/3 h-fit bg-dark-card border border-dark-border rounded-2xl p-6 shadow-card overflow-hidden">
              <div className="flex justify-between items-end border-b border-dark-border pb-4 mb-4">
                <h1 className="text-2xl font-bold font-display">Shopping Cart</h1>
                <p className="text-gray-400 text-sm">{filterdata.length} Items</p>
              </div>

              <div className="flex flex-col gap-6">
                {filterdata.map((item) => (
                  <div key={item?.id} className={`flex flex-col sm:flex-row gap-4 relative group p-2 rounded-xl transition-colors ${close ? 'opacity-30' : 'hover:bg-dark-hover'}`}>

                    {/* Image */}
                    <div className="w-24 h-24 bg-dark-bg rounded-xl p-2 flex-shrink-0">
                      <img src={item?.thumbnail} alt={item.title} className="w-full h-full object-contain" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <h2 className="text-lg font-semibold line-clamp-1">{item.title}</h2>
                        <p className="text-gray-400 text-sm">{item.category}</p>
                      </div>

                      <div className="font-bold text-primary mt-2">
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-4 sm:ml-4">
                      <div className="flex items-center bg-dark-bg rounded-lg border border-dark-border">
                        <button onClick={() => decreamentCart(item.id)} className="p-2 text-gray-400 hover:text-white transition-colors">
                          <FaMinus size={12} />
                        </button>
                        <span className="w-8 text-center font-semibold">{totalItem(item.id)}</span>
                        <button onClick={() => increamentCart(item.id)} className="p-2 text-gray-400 hover:text-white transition-colors">
                          <FaPlus size={12} />
                        </button>
                      </div>

                      <button 
                        onClick={() => { setClose(true); setDeleteit(item.id); }}
                        className="text-gray-500 hover:text-red-500 transition-colors p-2"
                        title="Remove Item"
                      >
                        <FaTrash />
                      </button>
                    </div>

                    <div className="hidden sm:block absolute right-4 bottom-4 font-bold text-lg">
                      ₹{totalPrice(item?.price, item.id)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:w-1/3">
              <div className="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-card sticky top-24">
                <h2 className="text-xl font-bold font-display border-b border-dark-border pb-4 mb-6">Order Summary</h2>

                <div className="space-y-4 text-sm mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>₹{totalItemPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-300 border-b border-dark-border pb-4">
                    <span>Tax estimate</span>
                    <span>₹0</span>
                  </div>
                  <div className="flex justify-between text-white text-lg font-bold pt-2">
                    <span>Total</span>
                    <span>₹{totalItemPrice}</span>
                  </div>
                </div>

                <button 
                  onClick={handleOrder}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 rounded-xl shadow-glow transition-colors"
                >
                  Proceed to Checkout
                </button>

                {/* UPI Intent button — only shown on mobile */}
                {isMobile && (
                  <button
                    onClick={handleUpiOrder}
                    className="w-full mt-3 flex items-center justify-center gap-2 bg-[#5f259f] hover:bg-[#4d1e82] text-white font-semibold py-3.5 rounded-xl transition-colors"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/640px-UPI-Logo-vector.svg.png"
                      alt="UPI"
                      className="h-5 object-contain brightness-200"
                    />
                    Pay via UPI
                  </button>
                )}

                <p className="text-xs text-center text-gray-500 mt-4">Safe and secure payments powered by Razorpay</p>
              </div>
            </div>

          </div>
      )}

      {/* Delete Confirmation Modal */}
      {close && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-dark-card border border-dark-border p-6 rounded-xl shadow-card w-full max-w-sm m-4 transform transition-all duration-300 scale-100">
            <h3 className="text-xl font-bold text-white mb-2 text-center">Remove Item?</h3>
            <p className="text-gray-400 text-center mb-6">Are you sure you want to remove this item from your cart?</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setClose(false)}
                className="flex-1 py-2.5 rounded-lg border border-dark-border text-gray-300 hover:text-white hover:bg-dark-hover transition-colors font-semibold"
              >
                Cancel
              </button>
              <button 
                onClick={removeItem}
                className="flex-1 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors font-semibold shadow-[0_0_15px_rgba(220,38,38,0.4)]"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;
