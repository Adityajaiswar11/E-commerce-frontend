import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecialProduct from "../pages/SpecialProduct";

const Product = () => {
  const [datashow, setDatashow] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setDatashow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div>
      <div>
        <h1 className=" text-5xl mt-12 pb-24 text-center first-letter:text-yellow-500  opacity-90">
          Our Products
        </h1>
      </div>

      <div className=" w-full mx-auto h-full px-12 m-5">
        <Slider {...settings}>
          {datashow.map((data) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="W-full px-20 h-auto" key={data.id}>
                <div className=" shadow-md shadow-black rounded-lg p-1 h-full bg-pink-100">
                  <img
                    src={data.image}
                    alt="img"
                    className="h-[250px] w-full rounded-lg shadow-lg hover:scale-105 cursor-pointer  duration-500 ease-linear"
                  />
                  <div className="">
                    <p className=" text-sm p-2 opacity-90 font-bold">
                      {" "}
                      {data.title}
                    </p>
                    <p className="text-sm p-2 opacity-90 text-green-600 font-bold">
                      Rating-{data.rating.rate}
                    </p>
                    <div className="">
                      <h1 className="p-2 font-bold">Price: {data.price}$</h1>
                      <button className=" bg-sky-600 px-3 py-2 m-3 text-sm rounded-full cursor-pointer hover:opacity-90 font-bold text-white">
                        Add Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <SpecialProduct />
    </div>
  );
};

export default Product;
