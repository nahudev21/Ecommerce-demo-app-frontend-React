import { useState } from "react";
import styles from "./RegisterPage.module.css"
import { registerRequest } from "../../api/auth";

export default function RegisterPage() {

  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });


  const handleChange = (event) => {
    const { name, value } = event.target;

    setformData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  };

  const handleClick = async (event) => {
    
    event.preventDefault();
    const userRegister = await registerRequest(formData);

    if(userRegister) {
      console.log(userRegister);
      setformData({ firstName: "", lastName: "", email: "", password: "" });
    }
    
  }

 console.log(formData)
  return (
    <div className={styles.register_container}>
      <form className={styles.register_containerForm}>
        <div className={styles.register_containertitle}>
          <h1 className={styles.register_title}>Registrarse</h1>
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
          />
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
          />
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
          />
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
          />
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
