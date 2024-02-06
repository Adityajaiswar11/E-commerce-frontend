import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Products";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cartdetails from "./pages/Cartdetails";
import { AppContext } from "./utils/Constant";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <ToastContainer />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/product" exact element={<Product />}>
              {" "}
            </Route>

            <Route path="/contact" element={<Contact />}></Route>
            <Route path="product/:id" element={<Cartdetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>

          <Footer />
        </AppContext>
      </BrowserRouter>
    </>
  );
};

export default App;
