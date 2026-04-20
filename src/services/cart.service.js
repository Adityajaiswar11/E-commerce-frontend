import { API_INSTANCE } from "../config/axios";
import { ENDPOINTS } from "../config/endpoin.config";

export const createCart = async (data) => {
  try {
    const response = await API_INSTANCE.post(ENDPOINTS.ADD_TO_CART, data);
    return response.data;
  } catch (error) {
    console.error("addToCart error:", error);
    throw error.response.data.message;
  }
}

export const updateCart = async (data) => {
  try {
    const response = await API_INSTANCE.put(ENDPOINTS.UPDATE_CART, data);
    return response.data;
  } catch (error) {
    console.error("updateCart error:", error);
    throw error.response.data.message;
  }
}

export const deleteCart = async (data) => {
  try {
    const response = await API_INSTANCE.delete(ENDPOINTS.DELETE_CART, data);
    return response.data;
  } catch (error) {
    console.error("deleteCart error:", error);
    throw error.response.data.message;
  }
}