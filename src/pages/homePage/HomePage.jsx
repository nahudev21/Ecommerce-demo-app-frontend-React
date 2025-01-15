import styles from "./HomePage.module.css"
import { useEffect, useState } from "react";
import { getAllProductsRequest } from "../../api/product";
import { useDispatch } from "react-redux";
import GiftPromo from "../../components/giftPromo/GiftPromo";
import ProductsPanel from "../../components/productsPanel/ProductsPanel";
import FilterProducts from "../../components/filterProducts/FilterProducts";
import Loader from "../../components/loader/Loader";
import { setAllProducts } from "../../redux/slices/productSlice";

export default function HomePage() {

  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
  
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const getAllProducts = async () => {
        const res = await getAllProductsRequest();
        dispatch(setAllProducts(res));
      }

      getAllProducts();
    }, [dispatch])

  return (
    <div className={styles.home_container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <GiftPromo />
          <FilterProducts />
          <div className={styles.products_container}>
            <ProductsPanel />
          </div>
        </>
      )}
    </div>
  );
}
