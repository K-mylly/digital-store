
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";

import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterForm from "./pages/RegisterForm";
import Success from "./pages/Success";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <Routes>
          {/* Páginas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/colecoes/:categoria" element={<Collections />} />
          <Route path="/carrinho" element={<Cart />} />

          {/* Autenticação e cadastro */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/cadastro/dados" element={<RegisterForm />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
