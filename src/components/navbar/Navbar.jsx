import styles from "./Navbar.module.css"
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { searchProducts } from "../../redux/slices/productSlice";


export default function Navbar() {

  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector((state) => state.auth);

  const handleLogout = () => {
    const confirm = window.confirm("¿Desea cerrar Sesión?");
    
    if(confirm) {
      dispatch(logout()); 
    }
  }

  const handleChangeSearch = (e) => {
    dispatch(searchProducts(e.target.value));
  }

  return (
    <nav className={styles.nav_container}>
      <div className={styles.nav_logo_container}>
        <Link className={styles.link} to="/">
          <span className={styles.nav_logo_title}>Tuch</span>
          <span className={styles.nav_logo_text}>Store</span>
        </Link>
      </div>
      <div className={styles.nav_seeker_container}>
        <input
          className={styles.nav_seeker_input}
          name="buscador"
          placeholder="Buscar..."
          onChange={handleChangeSearch}
        />
        <button className={styles.nav_seeker_button}>
          <IoMdSearch className={styles.nav_seeker_button_icon} />
        </button>
      </div>
      <div className={styles.nav_cart_container}>
        <span>
          <CiShoppingCart className={styles.nav_cart_icon} />
        </span>
        <span className={styles.nav_cart_amount}>{0}</span>
      </div>
      <div className={styles.nav_profile_container}>
        {isAuthenticate ? (
          <div className={styles.user_container}>
              <FaUser className={styles.nav_user_icon} />
              <p>Nahuel de la torre</p>
              <div className={styles.nav_user_dropdown}>
                <button className={styles.nav_button} onClick={handleLogout}>
                  Cerrar Sesión
                </button>
              </div>
          </div>
        ) : (
          <div className={styles.button_session_container}>
            <div>
              <Link to="/auth">
                <button className={styles.nav_button}>Inicia Sesión</button>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <button className={styles.nav_button}>Regístrate</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
