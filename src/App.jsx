import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Details from './pages/Details'


const App = () => {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/product" exact element={<Product />}> </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/details" element={<Details/>}></Route>
      

        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
