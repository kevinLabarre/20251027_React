import axios from "axios";

export const useProducts = () => {
  const baseUrl = "http://localhost:3001/products";

  const getProducts = () => {
    return axios.get(baseUrl);
  };

  const deleteProduct = (productId) => {
    return axios.delete(`${baseUrl}/${productId}`);
  };

  const addProduct = (newProduct) => {
    return axios.post(baseUrl, newProduct);
  };

  return { getProducts, deleteProduct, addProduct };
};
