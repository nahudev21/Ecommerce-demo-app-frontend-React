import Styles from "./CarouselProductDetails.module.css"
import { useState } from "react"

export default function CarouselProductDetails({ pathImages }) {

  const images = pathImages;

  const [ selectedIndex, setSelectedIndex ] = useState(0);

  const [ selectedImage, setSelectedImage ] = useState(images[0]);

  const selectNewImage = (index, images, next = true) => {
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  }

  const previus = () => {
    selectNewImage(selectedIndex, images, false);
  }

  const next = () => {
    selectNewImage(selectedImage, images);
  }

  return (
    <>
      <div className={Styles.carousel_imageContainer}>
        <img
          src={selectedImage}
          alt="Nahudev"
          className={Styles.carouselImage}
        />
      </div>
      <div className={Styles.carousel_button_container}>
        <button className={Styles.carousel_button} onClick={previus}>Anterior</button>
        <button className={Styles.carousel_button} onClick={next}>Siguiente</button>
      </div>
    </>
  );
}
