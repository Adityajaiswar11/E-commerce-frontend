import { useContext, useEffect } from "react";
import { Context } from "../utils/Constant";
import { useState } from "react";
export const Searchbar = () => {
   const {setSearch} = useContext( Context)
   const [category,setCategory] = useState([]);

   useEffect(() => {
          const category = async () => {
            try {
              const res = await fetch("https://dummyjson.com/products/categories");
              const data = await res.json();
              console.log("data received", data);
              setCategory(data);
            } catch (error) {
              console.log(error);
            }
          };
          category();
         
        }, []);

  return (
    <>
      <main className="w-full py-6 px-2">
        <div className="md:w-[80%] w-full px-7 md:px-5 mx-auto flex justify-between items-center gap-5 flex-wrap">
          <div className="w-full md:w-[10rem]">
            <h1 className="py-2 md:text-md text-black/80 font-medium text-sm">
              Search a product
            </h1>
           <div className="flex justify-center items-center md:w-[300px] w-[100%]   rounded-sm ">
           <input
          
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search a product"
          className="w-full outline-none  text-sm  bg-transparent text-black font-semibold focus:border-indigo-400 "
          
        />
          
           </div>
           
           
          </div>
          <div className="w-full md:w-[20rem]">
            <h1 className="py-2 md:text-md text-sm text-black/80 font-semibold ">
              Filter By Product Category
            </h1>
            <select
              className="md:w-[300px] w-full border border-gray-300 py-2 px-2 rounded-sm cursor-pointer first-letter:capitalize"
              onChange={(e) => setSearch(e.target.value)}
            >
              <option hidden>Select Product Categary</option>
              <option value=" ">All Products</option>
              {category.map((cate)=>(
                <option value={cate?.slug} key={cate?.slug} className="cursor-pointer  font-semibold">{cate?.slug}</option>
              ))}
            </select>
          </div>
        </div>
      </main>
    </>
  );
};