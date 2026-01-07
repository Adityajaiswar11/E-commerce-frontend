import { api } from "./Api";

class PaymentService {
   getProductList(){
		 return api.get(AUTH_API_ENDPOINT.LOGIN)
	 }
};

export default paymentService = new PaymentService();
