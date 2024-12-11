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
      return json;
    } 
  } catch (error) {
    console.log(error.message);
  }
};