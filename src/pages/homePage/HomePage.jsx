import styles from "./HomePage.module.css"
import { useEffect, useState } from "react";
import GiftPromo from "../../components/giftPromo/GiftPromo";
import ProductsPanel from "../../components/productsPanel/ProductsPanel";
import FilterProducts from "../../components/filterProducts/FilterProducts";
import Loader from "../../components/loader/Loader";

export default function HomePage() {

  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 800);
  
      return () => clearTimeout(timer);
    }, []);

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
