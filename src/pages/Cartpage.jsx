/* eslint-disable react/prop-types */

const Cartpage = ({ data }) => {




  return (
    <>
      <div className="w-[90%] mx-auto flex justify-between items-start  h-full border-b border-white/40 mb-2 ">
        <div className="w-[25%] p-1">
          <img
            src={data.image}
            alt=""
            className="h-[100px] w-[100px] rounded-xl "
          />
          <p className="text-[12px] py-2 hidden md:block">{data.title}</p>
        </div>

        <div className="w-[25%]p-2">
          <div className="flex justify-center items-center gap-5">
            <button className="text-xl">-</button>
            <h1 className="text-sm"></h1>
            <button>+</button>
          </div>
        </div>

        <div className="w-[25%] text-right">
          <h1>$ {data.price}</h1>
        </div>
        <button className="w-[25%] text-right" >DELETE</button>
      </div>
    </>
  );
};

export default Cartpage;
