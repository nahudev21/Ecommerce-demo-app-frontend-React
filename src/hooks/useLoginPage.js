import { useState } from "react";
import { loginRequest } from "../api/auth"
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSucces, loginFailure } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function useLoginPage(initialData, onValidate) {
 
  const [formData, setformData] = useState(initialData);
  const [ formErrors, setFormErrors ] = useState({});

  const navigate = useNavigate();
  const dispach = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const handleChange = (event) => {
      const { name, value } = event.target;
  
      setformData((prevState) => ({
        ...prevState,
        [name]: value
      }))
    };
  
    const handleClick = async (event) => {
      
      event.preventDefault();

      dispach(loginStart());

      const formError = onValidate(formData);

      if(formError === null) {
        const result = await loginRequest(formData);

        if (result.success) {
          dispach(loginSucces(result.data));
          setformData({ email: "", password: "" });
          navigate("/home")
        } else {
          dispach(loginFailure(result.message));
          setTimeout(() => {
            dispach(loginFailure(null));
          }, 3000);  
        }

      } else {
        setFormErrors(formError);
        setTimeout(() => {
          setFormErrors({});
        }, 5000)
      }

    }

  return { formData, formErrors, error, handleChange, handleClick };

}