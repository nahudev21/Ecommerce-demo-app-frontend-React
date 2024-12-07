import { API_URL } from "../config";

const getImageId = (product) => {
  const data = product.data;
  const { images } = data;
  const imageId = images.map((image) => {
    const id = image.imageId;
    return id;
  });

  return imageId;
}; 

const getImageIdFromProducts = (product) => {
  const { images } = product;
  const imageId = images.map((image) => {
    const id = image.imageId;
    return id;
  });
  return imageId;
}

export const getImageRequest = async (id) => {
  try {
    const response = await fetch(`${API_URL}/images/image/download/${id}`, {
      method: "GET",
      headers: { "Content-type": "Application/json" },
    });
    if (response.ok) {
      const json = await response.blob();
      const urlImage = URL.createObjectURL(json);
      //const imageBase = await blobToBase64(json)
      return urlImage;
    }
  } catch (error) {
    console.log(error);
  }
};

export const productMapped = (product, imgs) => {

  return {
    id: product.data.id,
    name: product.data.name,
    description: product.data.description,
    price: product.data.price,
    stock: product.data.inventory,
    brand: product.data.brand,
    images: imgs,
  };

}

export const listProductsMapped = (product, imgs) => {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.inventory,
    brand: product.brand,
    images: imgs,
  };
};

export const getProductByIdRequest = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/product/${id}/product`, {
      method: "GET",
      headers: { "Content-type": "Application/json" },
    });
    if (response.ok) {
      const product = await response.json();
      const imagesId = getImageId(product)
      
      const images = imagesId.map(async (id) => {
        const image = await getImageRequest(id)
        return image
      })

      const imagesResuls = await Promise.all(images)
      
      return productMapped(product, imagesResuls);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductsRequest = async () => {
  try {
    const response = await fetch(`${API_URL}/products/all`, {
      method: "GET",
      headers: { "Content-type": "Application/json" },
    });

    if (response.ok) {
      const products = await response.json();
      const { data } = products

      // Usar Promise.all para esperar a que todas las promesas dentro de `map` se resuelvan
      const modifiedProducts = await Promise.all(data.map(async (product) => {

        const imagesId = getImageIdFromProducts(product);  // Obtener los IDs de las imágenes

        // Para obtener todas las imágenes, usamos map sobre `imagesId` y esperamos que todas se resuelvan
        const images = await Promise.all(imagesId.map(async (id) => {
          const image = await getImageRequest(id); // Obtener la imagen para cada id
          return image;
        }));

        // Mapear las imágenes obtenidas al producto
        return listProductsMapped(product, images); // Devuelve el producto modificado
      }));

      return modifiedProducts; // Retorna el array de productos con las modificaciones
    }
  } catch (error) {
    console.log(error);
  }
};
