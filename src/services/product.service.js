import { ENDPOINTS } from "../config/endpoin.config";
import { API_INSTANCE } from "../config/axios";

export const getAllProducts = async (search, sort, status, title, page, limit) => {
  try {
    const queryParams = new URLSearchParams();
    if (search) queryParams.append("search", search);
    if (sort) queryParams.append("sort", sort);
    if (status) queryParams.append("status", status);
    if (title) queryParams.append("title", title);
    if (page) queryParams.append("page", page);
    if (limit) queryParams.append("limit", limit);
    const response = await API_INSTANCE.get(ENDPOINTS.GET_PRODUCTS, { params: queryParams });
    return response.data;
  } catch (error) {
    console.error("getAllProducts error:", error);
    throw error;
  }
};