import { useState } from "react";
import { registerRequest } from "../api/auth"

export default function useRegisterPage(initialData, onValidate) {
 
  const [formData, setformData] = useState(initialData);
  const [ formErrors, setFormErrors ] = useState({});

  const handleChange = (event) => {
      const { name, value } = event.target;
  
      setformData((prevState) => ({
        ...prevState,
        [name]: value
      }))
    };
  
    const handleClick = async (event) => {
      
      event.preventDefault();

      const formError = onValidate(formData);

      if(formError === null) {
        const userRegister = await registerRequest(formData);
        if (userRegister) {
          console.log(userRegister);
          setformData({ firstName: "", lastName: "", email: "", password: "" });
          alert("Registro exitoso!")
        }
      } else {
        setFormErrors(formError);
        setTimeout(() => {
          setFormErrors({});
        }, 5000)
      }

    }

  return { formData, formErrors, handleChange, handleClick };

}
