import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router";
import { ProductsProvider } from "./context/ProductsContext";
import LandingPage from "./pages/landingPage/LandingPage"
import HomePage from "./pages/homePage/HomePage"
import ProductDetails from "./pages/productDetails/ProductDetails"
import AdminPage from "./pages/adminPage/AdminPage"
import Navbar from "./components/navbar/Navbar";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";

export default function App() {

  const { isAuthenticate } = useSelector((state) => state.auth);

  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/home"
            element={isAuthenticate ? <HomePage /> : <Navigate to="/auth" />}
          />
          <Route
            path="/product-details"
            element={
              isAuthenticate ? <ProductDetails /> : <Navigate to="/auth" />
            }
          />
          <Route
            path="/admin-page"
            element={isAuthenticate ? <AdminPage /> : <Navigate to="/auth" />}
          />

          <Route path="/auth" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}
