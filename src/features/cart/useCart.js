import { useState } from "react";
import { createCart } from "../../services/cart.service";

export const useCart = () => {
  const [loading, setLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = async (data) => {
    console.log(data)

    const payload = {
      product_id: data.id,
      user_id: 5,
      quantity: 1,
      price:data.price,
    }
    try {
      setLoading(true);
      const response = await createCart(payload);
      setIsAdded(response.success);
      return response.data;
    } catch (error) {
      console.error("addToCart error:", error);
      throw error;
    }
    finally {
      setLoading(false);
    }
  }

  return { addToCart, loading, isAdded };
}