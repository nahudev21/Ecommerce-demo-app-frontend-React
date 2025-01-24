import { useEffect, useState } from "react";
import styles from "./CartPage.module.css";
import Loader from "../../components/loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeToCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {

  const [loading, setLoading] = useState(true);
  
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [])
    
  const handleRemoveToCart = (id) => {
    const confirm = window.confirm("¿Desea eliminar este producto del carrito?")
    if(confirm) {
        dispatch(removeToCart(id));
    }
  }

  return (
    <div className={styles.cart_page_container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.cart_container}>
            <h3 className={styles.cart_container_title}>
              Mi carrito de compras
            </h3>
            <table className={styles.cart_table}>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString("de-DE")}</td>
                    <td>{item.quantity}</td>
                    <td>
                      {(item.price * item.quantity).toLocaleString("de-DE")}
                    </td>
                    <td>
                      <button
                        className={styles.cart_table_button_delete}
                        onClick={() => handleRemoveToCart(item.id)}
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!cart.length ? (
              <div className={styles.is_cart_empty}>
                <h3 className={styles.cart_container_title}>
                  No hay productos agregados al carrito...
                </h3>
              </div>
            ) : (
              <></>
            )}
            <div className={styles.cart_total_information}>
              <h4 className={styles.cart_purchase_summary}>
                Resumen de compra
              </h4>
              <p className={styles.cart_total_price}>
                Total: ${totalPrice.toLocaleString("de-DE")}
              </p>
              <Link to="/home">
                <button className= {styles.button_continue_shopping}>Seguir comprando</button>
              </Link>
              <Link>
                <button className={styles.button_go_pay}>Ir a pagar</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
