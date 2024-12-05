import styles from "./HomePage.module.css"
import GiftPromo from "../../components/giftPromo/GiftPromo";
import ProductsPanel from "../../components/productsPanel/ProductsPanel";

export default function HomePage() {
  return (
    <div className={styles.home_container}>
      <GiftPromo />
      <div className={styles.products_container}>
        <ProductsPanel />
      </div>
    </div>
  );
}
