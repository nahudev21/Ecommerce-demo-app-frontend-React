import styles from "./GiftPromo.module.css"
import iphoneHero from "../../assets/iphone-hero.jpg"
import cargadorHero from "../../assets/cargador-hero.webp"

export default function GiftPromo() {
  return (
    <div className={styles.giftPromo_container}>
      <div className={styles.giftPromo_container_title}>
        <h3>¡Llévate un cargador GRATIS con la compra de cualquier equipo!</h3>
      </div>
      <div className={styles.giftPromo_container_images}>
        <img src={iphoneHero} />
        <img src={cargadorHero} />
      </div>
    </div>
  );
}
