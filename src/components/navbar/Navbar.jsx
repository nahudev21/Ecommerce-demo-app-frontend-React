import styles from "./Navbar.module.css"
import { IoMdSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { FaUser } from "react-icons/fa";


export default function Navbar() {

  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  }

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
        {
          isAuthenticate ? (<div>
          <FaUser />
          <p>Nahuel de la torre</p>
          <Link>
            <button className={styles.nav_button} onClick={handleLogout} >Cerrar Sesión</button>
          </Link>
        </div>)
        : (<><Link to="/auth">
              <div className={styles.nav_containerBotones}>
                <button className={styles.nav_button}>Inicia Sesión</button>
              </div>
            </Link>
            <div className={styles.nav_containerBotones}>
                <Link to="/register">
                  <button className={styles.nav_button}>Regístrate</button>
                </Link>
            </div></>)
        }
      </section>
    </nav>
  );
}
