import styles from "./CardProduct.module.css"
import { Link, useNavigate } from "react-router-dom";

export default function CardProduct({ product }) {

  const navigate = useNavigate();
  const firstPath = product.images[0]

  const handleSeeProductDetails = () => {
    navigate(`/product-details/${product.id}`);
  }

  return (
    <div className={styles.card_container} onClick={handleSeeProductDetails}>
      <div className={styles.card_sectionsContainer}>
        <span className={styles.section_informationState}>
          Estado {product.status.toLowerCase()}
        </span>
        <div className={styles.card_imgContainer}>
          <img className={styles.card_img} src={firstPath} />
        </div>
        <div className={styles.card_info}>
          <div className={styles.card_strongContainer}>
            <h3>{product.name}</h3>
          </div>
          <div className={styles.card_strongContainer}>
            <strong className={styles.card_price}>
              ${product.price.toLocaleString("de-DE")}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
