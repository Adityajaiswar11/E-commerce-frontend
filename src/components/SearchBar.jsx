import { useState, useEffect } from "react";
export const Searchbar = ({ setSearchQuery }) => {
   const [category,setCategory] = useState([]);

  const handleOptinChange = (e) => {
    setSearchQuery(e.target.value)
  }

   useEffect(() => {
          const category = async () => {
            try {
              const res = await fetch("https://dummyjson.com/products/categories");
              const data = await res.json();
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
                onChange={handleOptinChange}
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
              onChange={handleOptinChange}
            >
              <option hidden>Select Product Categary</option>
              <option value={''}>All Products</option>
              {category.map((cate, i) => (
                <option value={cate.slug} key={i} className="cursor-pointer  font-semibold">{cate?.name}</option>
              ))}
            </select>
          </div>
        </div>
      </main>
    </>
  );
};