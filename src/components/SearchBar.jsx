import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Constant";
import { FaSearch, FaFilter } from "react-icons/fa";

export const Searchbar = () => {
   const { setSearch } = useContext(Context);
   const [category, setCategory] = useState([]);

   useEffect(() => {
      const fetchCategories = async () => {
         try {
            const res = await fetch("https://dummyjson.com/products/categories");
            const data = await res.json();
            setCategory(data);
         } catch (error) {
            console.log("Error loading categories:", error);
         }
      };
      fetchCategories();
   }, []);

   return (
      <div className="w-full bg-dark-card border border-dark-border rounded-2xl p-6 shadow-card mb-10">
         <div className="flex flex-col md:flex-row gap-6 items-center w-full">
            
            {/* Search Input */}
            <div className="flex-1 w-full relative group">
               <label className="text-gray-400 text-sm font-medium mb-2 flex items-center gap-2">
                  <FaSearch className="text-primary" /> Search Products
               </label>
               <div className="relative">
                  <input
                     type="text"
                     onChange={(e) => setSearch(e.target.value.toLowerCase())}
                     placeholder="Search for laptops, phones, shoes..."
                     className="w-full bg-dark-bg border border-dark-border focus:border-primary rounded-xl py-3 px-5 text-white placeholder-gray-500 transition-all focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                     <div className="h-5 w-px bg-dark-border mr-3"></div>
                     <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">Type</span>
                  </div>
               </div>
            </div>

            {/* Divider for Desktop */}
            <div className="hidden md:block w-px h-16 bg-dark-border"></div>

            {/* Category Filter */}
            <div className="w-full md:w-72 relative">
               <label className="text-gray-400 text-sm font-medium mb-2 flex items-center gap-2">
                  <FaFilter className="text-accent" /> Categories
               </label>
               <div className="relative">
                  <select
                     className="w-full bg-dark-bg border border-dark-border focus:border-accent rounded-xl py-3 px-5 text-white appearance-none cursor-pointer transition-all focus:outline-none focus:ring-1 focus:ring-accent shadow-inner capitalize"
                     onChange={(e) => setSearch(e.target.value === "all" ? "" : e.target.value)}
                  >
                     <option value="all">All Products</option>
                     {category.map((cate, idx) => {
                        // DummyJSON's category API returns an array of objects or strings depending on endpoint.
                        // Assuming new standard mapping:
                        const catValue = typeof cate === 'object' ? cate.slug : cate;
                        const catName = typeof cate === 'object' ? cate.name : cate;
                        return (
                           <option value={catValue} key={idx} className="bg-dark-bg text-white capitalize">
                              {catName}
                           </option>
                        );
                     })}
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                     <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                     </svg>
                  </div>
               </div>
            </div>

         </div>
      </div>
   );
};