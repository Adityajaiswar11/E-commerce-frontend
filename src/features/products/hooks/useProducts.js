import { useState } from "react";
import { getAllProducts } from "../../../services/product.service";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current_page: 1,
    per_page: 1,
    total_count: 1,
  });

  const fetchProducts = async (search, sort, status, title, page, limit) => {
    try {
      setLoading(true);
      const response = await getAllProducts(search, sort, status, title, page, limit);
      setProducts(response.data);
      setPagination({
        current_page: response.current_page,
        per_page: response.per_page,
        total_count: response.count,
        total_pages: response.total_pages,
      });

      return response.data;
    } catch (error) {
      console.error("getAllProducts error:", error);
      throw error;
    }
    finally {
      setLoading(false);
    }
  };
  return { fetchProducts, products, loading, pagination };
};
