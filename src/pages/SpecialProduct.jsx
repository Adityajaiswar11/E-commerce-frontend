import Special from "./Special";

const SpecialProduct = () => {
  return (
    <div className=" mx-auto opacity-90  px-12 m-5">
      <h1 className=" text-4xl first-letter:text-yellow-600 font-bold  pl-10 pb-9 uppercase">
        Top deals
      </h1>
      <div className=" grid grid-cols-4 gap-1 w-full">
        <Special />
      </div>
    </div>
  );
};

export default SpecialProduct;
