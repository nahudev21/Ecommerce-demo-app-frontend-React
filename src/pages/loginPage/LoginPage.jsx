import styles from "./LoginPage.module.css";
import useLoginPage from "../../hooks/useLoginPage";
import { Link } from "react-router-dom";

export default function LoginPage() {

   const initialData = {
     email: "",
     password: "",
   };

   const onValidate = (formData) => {
     let isError = false;
     let errors = {};

     if (!formData.email.trim()) {
       errors.email = "El campo usuario no puede estar vacio!";
       isError = true;
     } 

     if (!formData.password.trim()) {
       errors.password = "El campo contraseña no puede estar vacio!";
       isError = true;
     } 

     return isError ? errors : null;
   };

   const { formData, formErrors, error, handleChange, handleClick } = useLoginPage(initialData, onValidate);
   

  return (
    <div className={styles.register_page_container}>
      <div className={styles.register_container}>
        <form className={styles.register_containerForm}>
          <div className={styles.register_containertitle}>
            <h1 className={styles.register_title}>Inicia sesión aquí</h1>
            {error && <p className={styles.form_error}>{error}</p>}
          </div>
          <div className={styles.register_containerInput}>
            <label htmlFor="email">Usuario</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Ingresa tu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {formErrors.email && (
              <p className={styles.form_error}>{formErrors.email}</p>
            )}
          </div>
          <div className={styles.register_containerInput}>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {formErrors.password && (
              <p className={styles.form_error}>{formErrors.password}</p>
            )}
          </div>
          <div className={styles.register_containerInput}>
            <button className={styles.register_button} onClick={handleClick}>
              Iniciar Sesión
            </button>
          </div>
          <Link>
            <span>¿Aun no tienes cuenta? Ingresa aquí</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
