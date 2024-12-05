import { useEffect, useState } from "react"
import { getProductByIdRequest } from "./api/product"
import { getAllProductsRequest } from "./api/product";

export default function App() {

  const [ productImg, setProductImg ] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      const product = await getProductByIdRequest(5);
      setProductImg(product)
    };

    getProduct();
  }, []);

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await getAllProductsRequest();

      console.log(products)
    };

    getAllProducts();
  }, []);

  return (
    <div>
    
  
      
    </div>
  )
}
