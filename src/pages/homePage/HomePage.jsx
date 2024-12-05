import styles from "./HomePage.module.css"
import ProductsPanel from "../../components/productsPanel/ProductsPanel";

export default function HomePage() {
  return (
    <div className={styles.home_container}>
      <div className={styles.products_container}>
        <ProductsPanel />
      </div>
    </div>
  );
}
