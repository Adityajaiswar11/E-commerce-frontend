/* eslint-disable react/prop-types */

const SpecialCart = ({ data }) => {
  return (
    <div className="md:h-screen">
      <div className="md:mt-[7rem] md:mb-[2rem] md:w-[78%] md:mx-auto w-full mx-[2rem] my-[2rem]">
        <h1 className="md:text-[2rem] opacity-90 first-letter:text-red-600 first-letter:font-bold text-2xl">
          Product Details
        </h1>
      </div>
      <div className="md:w-[80%] mx-auto   flex justify-between items-start md:flex-row flex-col w-full">
        <div className="md:w-[350px] rounded-md shadow-md shadow-black hover:scale-105 duration-300 ease-in-out mx-6 my-3">
          <img
            src={data?.img}
            alt=""
            className="rounded-md md:w-[350px] md:h-[300px]"
          />
        </div>

        <div className=" md:w-1/2 ">
          <div className="">
            <p className=" md:font-bold text-[1.5rem] md:py-2 md:px-6 tracking-widest text-red-500 px-5 py-1">
              {data.name}
            </p>
            <span className="text-white  text-md md:py-2 px-6 py-3  tracking-widest">
              Rating - {data?.rate}
            </span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-white  text-lg md:mb-5 px-6 md:px-2 tracking-widest">
            Price - ${data.price}
          </h3>
          <button className="px-[9px] py-2 mt-3 md:mt-0 bg-red-600 rounded-md opacity-90 duration-150 hover:opacity-100">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialCart;
