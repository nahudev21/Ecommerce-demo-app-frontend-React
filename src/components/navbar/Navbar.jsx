import styles from "./Navbar.module.css"
import { IoMdSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className={styles.nav_container}>
      <section className={styles.nav_sectionBuscador}>
        <div className={styles.nav_logoContainer}>
          <Link className={styles.link} to="/">
            <span className={styles.nav_logoSpan1}>Tuch</span>
            <span className={styles.nav_logoSpan2}>Innovations</span>
          </Link>
        </div>
      </section>
      <section className={styles.nav_sectionButton}>
        <div className={styles.nav_containerBuscador}>
          <form className={styles.buscador}>
            <input
              className={styles.buscador_input}
              name="buscador"
              placeholder="Buscar..."
            />
            <span>
              <IoMdSearch className={styles.search_icon} />
            </span>
          </form>
        </div>
        <Link className={styles.link} to="/product-details">
          <div className={styles.cart_container}>
            <input className={styles.cart_inputItems} value={0} disabled />
            <div className={styles.cart_iconContainer}>
              <button className={styles.cart_iconButton}>
                <TiShoppingCart className={styles.cart_icon} />
              </button>
            </div>
          </div>
        </Link>
        <div className={styles.nav_containerBotones}>
          <button className={styles.nav_button}>Inicia Sesión</button>
        </div>
        <div className={styles.nav_containerBotones}>
          <button className={styles.nav_button}>Regístrate</button>
        </div>
      </section>
    </nav>
  );
}
