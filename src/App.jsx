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
import { CartProvider } from "./context/CartContext";





const App = () => {

 

  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <AppContext>
          <ToastContainer />
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/product" element={<Product />}></Route>

            <Route path="/contact" element={<Contact />}></Route>
            <Route path="product/:id" element={<Cartdetails />}></Route>
            <Route path="/login" element={<ProtectedRoute> 
              <Login/>
            </ProtectedRoute>}></Route>
            <Route path="/signup" element={<ProtectedRoute> 
              <Signup/>
            </ProtectedRoute>}></Route>
            
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
          <Footer />
        </AppContext>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
