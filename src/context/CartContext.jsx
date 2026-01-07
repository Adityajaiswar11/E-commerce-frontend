import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { end_point } from "../services/api_endpoint";

//creating cart context
export const cartContext = createContext();

export const CartProvider = ({children}) => {
	// State for the context
	const [cart, setCart] = useState([]);
	const [products,setProducts] = useState([]);
	const [isLoading,setIsLoading] = useState(false);

	const getProductList = async ()=> {
		try{
			setIsLoading(true)
			const res = await axios.get(end_point.GET_PRODUCT_LIST(100));
			if (res.status!==200){
				throw new Error('error while fetching product');
			}
			setProducts(res?.data?.products)
		}catch(e){
     console.log(e)
		 setProducts(null)
		}finally{
      setIsLoading(false)
		}
	}
	useEffect(() => {

		getProductList()

	}, []);

	return (
		<cartContext.Provider
			value={{
				cart,
				setCart,
				products, 
				setProducts,
				isLoading, 
				setIsLoading
			}}
		>
			{children}
		</cartContext.Provider>
	);
};

export const useCart = () => {
	const ctc = useContext(cartContext);
	if (!ctc) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return ctc;
};