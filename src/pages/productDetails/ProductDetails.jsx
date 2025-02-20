import styles from "./ProductDetails.module.css"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CarouselProductDetails from "../../components/carouselProductDetails/CarouselProductDetails";

export default function ProductDetails() {

  const products = useSelector((state) => state.products.allProducts);
  const { id } = useParams();
  const productDetails = products.find((product) => product.id === parseInt(id));

  // Verifica si productDetails existe y si tiene las propiedades necesarias
  if (
    !productDetails ||
    !productDetails.images ||
    productDetails.images.length === 0
  ) {
    return <div>Loading...</div>; // O alguna indicación de que los datos se están cargando
  }

  const pathImages = productDetails.images;
  const formattedPrice = productDetails.price.toLocaleString("de-DE");
  const state = productDetails.status.toLowerCase();

  return (
    <div className={styles.productDetails_container}>
      <section className={styles.section_carousel}>
        <CarouselProductDetails pathImages={pathImages} />
      </section>
      <section className={styles.section_information}>
        <span className={styles.section_informationState}>Estado {state}</span>
        <h3 className={styles.section_informationTitle}>
          {productDetails.name}
        </h3>
        {productDetails.stock > 0 ? (
          <span className={styles.section_informationStock}>
            Stock disponible
          </span>
        ) : (
          <span className={styles.section_informationStock}>Sin Stock</span>
        )}
        <span className={styles.section_informationEnvio}>
          Envio gratis solo dentro de San Miguel Tucumán
        </span>
        <span className={styles.section_informationPrice}>
          ${formattedPrice}
        </span>
        <span
          className={styles.section_informationAmount}
        >{`Marca: ${productDetails.brand}`}</span>
        <div className={styles.section_information_amountContainer}>
          <span className={styles.section_informationAmount}>Cantidad:</span>
          <select
            id="opciones"
            name="opciones"
            className={styles.section_information_amountOptions}
          >
            <option value="opcion1">1 unidad</option>
            <option value="opcion2">2 unidades</option>
            <option value="opcion3">3 unidades</option>
            <option value="opcion4">4 unidades</option>
            <option value="opcion5">5 unidades</option>
          </select>
        </div>
        <div className={styles.section_information_containerButton}>
          <button className={styles.section_information_buyNowButton}>
            Comprar ahora
          </button>
          <button className={styles.section_information_addToCartButton}>
            Agregar al carrito
          </button>
        </div>
      </section>
    </div>
  );
}
