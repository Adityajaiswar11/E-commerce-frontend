import Banner from "../components/Banner";
import Product from "../components/Products";
import Slide from "./Slide";

const Home = () => {
  return (
    <>
    <Banner/>
      <div className="my-10 md:my-0">
         <Slide/>
      </div>
      <Product />
    </>
  );
};

export default Home;
