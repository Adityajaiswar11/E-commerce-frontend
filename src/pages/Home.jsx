import Banner from "../components/Banner";
import Product from "../components/Products";
import Contact from "./Contact";
import Slide from "./Slide";

const Home = () => {
  return (
    <>
       <Banner/>
      <div className="my-10 md:my-0">
         <Slide/>
      </div>
      <Product />
      <Contact/>
    </>
  );
};

export default Home;
