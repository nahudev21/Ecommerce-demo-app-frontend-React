import styles from "./FilterProducts.module.css"
import { useState } from "react";

export default function FilterProducts() {
   const [active, setActive] = useState(0);

   const handleClick = (index) => {
     setActive(index);
   };

   return (
     <section className={styles.category_container}>
       <div className={styles.category_containerButtons}>
         <button
           onClick={() => handleClick(0)}
           className={
             active === 0
               ? `${styles.filters_button} ${styles.active}` // Aquí se agregan espacios
               : styles.filters_button
           }
         >
           Todos
         </button>
         <button
           onClick={() => handleClick(1)}
           className={
             active === 1
               ? `${styles.filters_button} ${styles.active}` // Aquí se agregan espacios
               : styles.filters_button
           }
         >
           Nuevos
         </button>
         <button
           onClick={() => handleClick(2)}
           className={
             active === 2
               ? `${styles.filters_button} ${styles.active}` // Aquí se agregan espacios
               : styles.filters_button
           }
         >
           Usados
         </button>
         <button
           onClick={() => handleClick(3)}
           className={
             active === 3
               ? `${styles.filters_button} ${styles.active}` // Aquí se agregan espacios
               : styles.filters_button
           }
         >
           Cargadores
         </button>
       </div>
     </section>
   );
}
