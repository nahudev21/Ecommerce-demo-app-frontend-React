import { API_URL } from "../config";

export const registerRequest = async (user) => {
  try {
    const response = await fetch(`${API_URL}/users/add`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(user)
    });
    if (response.ok) {
      const json = await response.json();
      console.log(json)
      return { success: true, data: json }
    } else {
      const errorRequest = await response.json();

      if(response.status === 409) {
        return { success: false, message: "Ya existe un usuario con esa dirección email" }
      }

      return {
        success: false,
        message: errorRequest.message || "Error desconocido",
      };
    }
  } catch (error) {
    console.log("Error de red o de conexión:", error);
    return { message: "Error de red o de conexión" };
  }
};