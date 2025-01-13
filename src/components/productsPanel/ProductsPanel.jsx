import styles from "./ProductsPanel.module.css"
import CardProduct from "../cardProduct/CardProduct"
import { useProducts } from "../../context/ProductsContext";

export default function ProductsPanel() {

  const { products } = useProducts();

  return (
        <div className={styles.products_container}>
          <ul className={styles.products_ul}>
            {products.map((product) => {
              return (
                <li className={styles.products_li} key={product.id}>
                  <CardProduct product={product} />
                </li>
              );
            })}
          </ul>
        </div>
  );
}
