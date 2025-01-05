import { Routes, Route } from "react-router";
import { ProductsProvider } from "./context/ProductsContext";
import LandingPage from "./pages/landingPage/LandingPage"
import HomePage from "./pages/homePage/HomePage"
import ProductDetails from "./pages/productDetails/ProductDetails"
import AdminPage from "./pages/adminPage/AdminPage"
import Navbar from "./components/navbar/Navbar";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";

export default function App() {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/admin-page" element={<AdminPage />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}
