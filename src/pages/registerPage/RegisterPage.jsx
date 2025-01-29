import styles from "./RegisterPage.module.css"
import useRegisterPage from "../../hooks/useRegisterPage";
import { ToastContainer } from "react-toastify";


export default function RegisterPage() {

  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onValidate = (formData) => {

    let isError = false;
    let errors = {};

    if(!formData.firstName.trim()) {
      errors.firstName = "El campo nombre no puede estar vacio!";
      isError = true;
    } else if (!isNaN(formData.firstName)) {
      errors.firstName = "El campo nombre no puede ser un número!";
      isError = true;
    } else if(formData.firstName.length <= 2) {
      errors.firstName = "El campo nombre no puede tener menos de 3 caracteres!";
      isError = true;
    }


    if (!formData.lastName.trim()) {
      errors.lastName = "El campo apellido no puede estar vacio!";
      isError = true;
    } else if (!isNaN(formData.lastName)) {
      errors.lastName = "El campo apellido no puede ser un número!";
      isError = true;
    } else if (formData.firstName.length <= 2) {
      errors.firstName =
        "El campo apellido no puede tener menos de 3 caracteres!";
      isError = true;
    }

    if (!formData.email.trim()) {
      errors.email = "El campo usuario no puede estar vacio!";
      isError = true;
    } else {
      const regExEmail =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      const isValidEmail = regExEmail.test(formData.email);

      if(isValidEmail === false) {
      errors.email = "Proporcione un email válido!";
      isError = true;
      }
    }

    if (!formData.password.trim()) {
      errors.password = "El campo contraseña no puede estar vacio!";
      isError = true;
    } else if(formData.password.length <= 7) {
      errors.password = "El campo contraseña debe contener al menos 8 caracteres!";
      isError = true;
    }

    return isError ? errors : null;

  };

  const { formData, formErrors, handleChange, handleClick } = useRegisterPage(initialData, onValidate);

  return (
    <div className={styles.register_container}>
      <ToastContainer />
      <form className={styles.register_containerForm}>
        <div className={styles.register_containertitle}>
          <h1 className={styles.register_title}>Formulario de Registro</h1>
        </div>
        <div className={styles.register_containerInput}>
          <label htmlFor="firstName">Nombre</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Ingresa tu nombre"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {formErrors.firstName && (
            <p className={styles.form_error}>{formErrors.firstName}</p>
          )}
        </div>
        <div className={styles.register_containerInput}>
          <label htmlFor="lastName">Apellido</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Ingresa tu apellido"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {formErrors.lastName && (
            <p className={styles.form_error}>{formErrors.lastName}</p>
          )}
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
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
}
