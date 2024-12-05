import styles from "./LandingPage.module.css"
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import iphonesImg from "../../assets/iphones.jpg"


export default function LandingPage() {
  return (
    <div className={styles.lading_container}>
      <div className={styles.hero_container}>
        <section className={styles.section_left}>
          <h3 className={styles.section_leftTitle}>
            Encuentra el Iphone perfecto para ti!
          </h3>
          <p>
            Descubre la última generación de iPhones con ofertas exclusivas.
          </p>
          <p>
            Potencia, elegancia y tecnología de punta en un solo dispositivo.
            Encuentra el modelo ideal para ti y aprovecha los mejores precios
            del mercado.
          </p>
          <p>¡Compra ahora y lleva tu experiencia móvil al siguiente nivel!</p>
          <Link to="/home">
            <button className={styles.section_leftButton}>Empezar</button>
          </Link>
        </section>
        <section className={styles.section_right}>
          <div className={styles.section_right_containerImg}>
            <img className={styles.section_rightImg} src={iphonesImg} />
          </div>
          <div className={styles.advertisement}>
            <h3>Regístrate y mantente actualizado</h3>
            <ul>
              <li>
                <FaCheck className={styles.check_icon} /> Dispositivos nuevos
              </li>
              <li>
                <FaCheck className={styles.check_icon} /> Dispositivos usados
              </li>
              <li>
                <FaCheck className={styles.check_icon} /> Garantía
              </li>
              <li>
                <FaCheck className={styles.check_icon} /> Promos y descuentos
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
