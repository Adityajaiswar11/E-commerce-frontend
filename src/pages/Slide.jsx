import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Slide = () => {
  const [count, setCount] = useState(0);
  const data = [
    {
      id: 1,
      pic: "/images/c-2.avif",
    },

    {
      id: 2,
      pic: "/images/c-3.avif",
    },

    {
      id: 3,
      pic: "https://www.panaprium.com/cdn/shop/articles/online_thrift_store_vintage_fashion_1000.jpg?crop=center&v=1638333789&width=600",
    },
    {
      id: 4,
      pic: "https://www.iese.edu/insight/wp-content/uploads/sites/3/1970/01/Fast-Fashion-estrategia-minorista.jpg",
    },
  ];
  //count update functions
  const handleClickPlus = () => {
    setCount(count == data.length - 1 ? 0 : count + 1);
  };

  const handleClickminus = () => {
    setCount(count == 0 ? data.length - 1 : count - 1);
  };

  return (
    <>
      <div className="w-[90%] mx-auto mt-1">
        <marquee
          direction="down"
          className="text-2xl mt-5 py-4  text-center rounded-md px-2"
        >
          Unlock Your Shopping Potential
        </marquee>
      </div>
      <div className="slide w-[90%] bg-[#4158D0] mx-auto mt-20 text-center flex justify-center items-center md:h-[70vh] bg-gradient-to-tl h-[50vh] rounded-full">
        <h2 className="text-3xl font-semibold md:block hidden">TOP DEALS</h2>
        {data.map((img, i) => {
          return (
            <div
              className={`slider ${count == i ? "block" : "hidden"} p-3`}
              key={i}
            >
              <img
                src={img.pic}
                alt="img"
                width={800}
                className=" rounded-md"
              />
              <div className="btn">
                <div
                  className="icons bg-red-600 hover:bg-blue-600 duration-200"
                  onClick={handleClickminus}
                >
                  <FaArrowLeftLong />
                </div>

                <div
                  className="icons bg-red-600 hover:bg-pink-600 duration-200"
                  onClick={handleClickPlus}
                >
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          );
        })}
        <h2 className="text-3xl font-semibold md:block hidden">BUY NOW</h2>
      </div>
    </>
  );
};

export default Slide;
