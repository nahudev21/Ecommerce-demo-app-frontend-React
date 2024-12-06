import styles from "./HomePage.module.css"
import GiftPromo from "../../components/giftPromo/GiftPromo";
import ProductsPanel from "../../components/productsPanel/ProductsPanel";
import FilterProducts from "../../components/filterProducts/FilterProducts";

export default function HomePage() {
  return (
    <div className={styles.home_container}>
      <GiftPromo />
      <FilterProducts />
      <div className={styles.products_container}>
        <ProductsPanel />
      </div>
    </div>
  );
}
