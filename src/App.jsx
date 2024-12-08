import { Routes, Route } from "react-router";
import { ProductsProvider } from "./context/ProductsContext";
import LandingPage from "./pages/landingPage/LandingPage"
import HomePage from "./pages/homePage/HomePage"
import ProductDetails from "./pages/productDetails/ProductDetails"
import AdminPage from "./pages/adminPage/AdminPage"
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <ProductsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/admin-page" element={<AdminPage />} />
        </Routes>
      </ProductsProvider>
    </>
  );
}
