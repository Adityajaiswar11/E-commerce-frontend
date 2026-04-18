import "./index.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Cartdetails from "./pages/Cartdetails";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import { AppContext } from "./utils/Constant";
import Footer from "./components/Footer";
import ProtectedRoute from "./protected/ProtectedRoute";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Orders from "./pages/Orders";
import { ViewProductList } from "./features/products/components/ViewProductList";
import { LayoutProvider, useLayout } from "./context/LayoutContext";
import { PaymentProvider } from "./features/payment/context/PaymentContext";

const LayoutWrapper = ({ children }) => {
  const { showHeader, showFooter } = useLayout();
  return (
    <>
      {showHeader && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <LayoutProvider>
            <PaymentProvider>
              <ToastContainer />
              <LayoutWrapper>
                <Routes>
                  <Route path="/" exact element={<Home />}></Route>
                  <Route path="/product" element={<Product />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
                  <Route path="product/:id" element={<Cartdetails />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/signup" element={<Signup />}></Route>
  
                  <Route path="/cart" element={<Cart />}></Route>
                  <Route path="/checkout" element={<ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>}></Route>
                  <Route path="/payment-success" element={<PaymentSuccess />}></Route>
                  <Route path="/payment-failed" element={<PaymentFailed />}></Route>
                  <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<Overview />} />
                    <Route path="products" element={<ViewProductList />} />
                    <Route path="orders" element={<Orders />} />
                  </Route>
                </Routes>
              </LayoutWrapper>
            </PaymentProvider>
          </LayoutProvider>
        </AppContext>
      </BrowserRouter>
    </>
  );
};
export default App;
