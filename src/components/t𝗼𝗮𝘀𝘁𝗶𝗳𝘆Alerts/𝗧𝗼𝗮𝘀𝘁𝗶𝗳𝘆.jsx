import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function 𝗧𝗼𝗮𝘀𝘁𝗶𝗳𝘆(text, variant) {

  const handleToast = () => {
    if (variant === "success") {
      toast.success(text);
    } else if (variant === "error") {
      toast.error(text);
    }
  }

  useEffect(() => {

  }, [])

  return (
    <>
     <ToastContainer />
    </>
  )
}
