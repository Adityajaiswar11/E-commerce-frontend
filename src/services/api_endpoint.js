export const end_point = {
  //auth endpoint
	REGISTER: '/register',
	LOGIN: '/login',
  
	//product endpoint
	GET_PRODUCT_LIST: (limit) => `https://dummyjson.com/products?limit=${limit}`
};