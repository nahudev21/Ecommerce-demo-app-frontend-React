import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import {
  getProductByIdRequest, 
  getAllProductsRequest
} from "../api/product";

const ProductsContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context)
    throw new Error("useProducts must be used within a ProductsProvider");
  return context;
};

export function ProductsProvider ({ children }) {

    const [products, setProducts] = useState([])

    const [productDetails, setProductDetails] = useState([])

    useEffect(() => {
      getProducts()
    }, [])

    const getProducts = async () => {
      try {
        const res = await getAllProductsRequest();
        setProducts(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    const getProduct = async (id) => {
      try {
        const res = await getProductByIdRequest(id)
        setProductDetails(res)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }

    return (
      <ProductsContext.Provider
        value={{
          products,
          productDetails  
        }}
      >
        {children}
      </ProductsContext.Provider>
    )
}