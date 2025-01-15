import styles from "./FilterProducts.module.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByStatus, sortProducts } from "../../redux/slices/productSlice";

export default function FilterProducts() {
   const [active, setActive] = useState(0);

   const dispatch = useDispatch();

   const handleClick = (e) => {
     const index = e.target.getAttribute("data-index");
     setActive(parseInt(index));
     dispatch(filterByStatus(e.target.value));
   };

   const handleSort = (e) => {
     dispatch(sortProducts(e.target.value));
   }

   return (
     <section className={styles.category_container}>
       <div className={styles.category_containerButtons}>
         <select className={styles.select_container} onChange={handleSort}>
           <option className={styles.select_option} value="asc">
             Menor a mayor
           </option>
           <option className={styles.select_option} value="desc">
             Mayor a menor
           </option>
         </select>
         <button
           data-index="0"
           onClick={handleClick}
           className={
             active === 0
               ? `${styles.filters_button} ${styles.active}` // Aquí se agregan espacios
               : styles.filters_button
           }
           value="todos"
         >
           Todos
         </button>
         <button
           data-index="1"
           onClick={handleClick}
           className={
             active === 1
               ? `${styles.filters_button} ${styles.active}` // Aquí se agregan espacios
               : styles.filters_button
           }
           value="nuevo"
         >
           Nuevos
         </button>
         <button
           data-index="2"
           onClick={handleClick}
           className={
             active === 2
               ? `${styles.filters_button} ${styles.active}` // Aquí se agregan espacios
               : styles.filters_button
           }
           value="usado"
         >
           Usados
         </button>
       </div>
     </section>
   );
}
