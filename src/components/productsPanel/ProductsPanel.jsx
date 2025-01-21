import styles from "./ProductsPanel.module.css"
import CardProduct from "../cardProduct/CardProduct"
import { useSelector } from "react-redux";

export default function ProductsPanel() {

  const products = useSelector((state) => state.products.productsCopy);

  return (
    <div className={styles.products_container}>
      {products.length === 0 ? (
        <p className={styles.products_search_p}>
          No hay productos para esta búsqueda...
        </p>
      ) : (
        <ul className={styles.products_ul}>
          {products.map((product) => (
            <li className={styles.products_li} key={product.id}>
              <CardProduct product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
