import { API_URL } from "../config"

export const paymentMapped = (cart) => {
    return {
        title: cart.name,
        description: cart.description,
        quantity: cart.quantity,
        unitPrice: cart.price,
    }
}

export const paymentRequest = async (cart) => {

    const listPaymentMapped = cart.map((item) => paymentMapped(item));

    try {
       const response = await fetch(`${API_URL}/payment/mercado-pago`, {
         method: "POST",
         headers: { "Content-type": "Application/json" },
         body: JSON.stringify(listPaymentMapped),
       });
       if (response.ok) {
         const json = await response.text();
         return json;
       }
    } catch (error) {
      console.error(error)
    }
  }