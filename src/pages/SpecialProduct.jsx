import Special from "./Special";
import { products } from "../utils/helper";

const SpecialProduct = () => {

  return (
    <div className=" md:mx-auto opacity-90  md:px-12 md:m-16 flex justify-center items-center flex-col">
      <h1 className=" text-4xl first-letter:text-yellow-600 font-bold  md:pl-10 md:pb-9 uppercase text-center md:text-start">
        Top deals
      </h1>
      <div className=" grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-1 w-full sm:grid-cols-2">
       {
         products.map(p => <Special key={p.id} p={p}/>)
       }
      </div>
    </div>
  );
};

export default SpecialProduct;
