import styles from "./CardProduct.module.css"
import { Link } from "react-router-dom";

export default function CardProduct({ product }) {

  const firstPath = product.images[0]

  return (
    <Link to="/product-details" className={styles.card_link}>
      <div className={styles.card_container}>
        <div className={styles.card_sectionsContainer}>
          <div className={styles.card_imgContainer}>
            <img className={styles.card_img } src={firstPath} />
          </div>
          <hr />
          <div className={styles.card_info}>
            <div>
              <h3>{product.name}</h3>
            </div>
            <div className={styles.card_envioContainer}>
              <span className={styles.card_envio}>
                Envio gratis solo dentro de Tucumán
              </span>
            </div>
            <div className={styles.card_priceContainer}>
              <strong className={styles.card_price}>
                ${product.price.toLocaleString("de-DE")}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
