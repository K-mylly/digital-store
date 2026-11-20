import { Link, NavLink } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Terminal
} from "lucide-react";

import { useCart } from "../context/CartContext";
import "./Header.css";
import { useState } from "react";


function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

 const { cartCount, cartItems, cartTotal, clearCart } = useCart();
  
  return (
    <header className="header">
      <div className="header-main container">

        <Link to="/" className="logo">
          <Terminal size={23} strokeWidth={3} />
          <span>Digital Store</span>
        </Link>

        <form className="search-box">
          <input
            type="text"
            placeholder="Pesquisar produto..."
          />
          <button type="submit" aria-label="Pesquisar">
            <Search size={19} />
          </button>
        </form>

        <div className="header-actions">
          <Link to="/cadastro" className="register-link">
            Cadastre-se
          </Link>

          <Link to="/login" className="login-button">
            Entrar
          </Link>

          <div className="cart-wrapper">
  <button
    type="button"
    className="cart-button"
    onClick={() => setIsCartOpen(!isCartOpen)}
  >
    <ShoppingCart size={22} />
    <span className="cart-count">{cartCount}</span>
  </button>

  {isCartOpen && (
    <div className="cart-popup">
      <h3>Meu carrinho</h3>

      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="cart-popup-items">
            {cartItems.map((item, index) => (
              <div className="cart-popup-item" key={`${item.id}-${index}`}>
                <img src={item.image} alt={item.name} />

                <div>
                  <strong>{item.name}</strong>
                  <span>
                    {item.price.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-popup-total">
            <strong>Total:</strong>
            <strong>
              {cartTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </div>
          <div className="cart-popup-actions">
  <button
    className="cart-clear-button"
    onClick={clearCart}
  >
    Esvaziar
  </button>

  <Link
    to="/carrinho"
    className="cart-view-button"
  >
    Ver Carrinho
  </Link>
</div>
        </>
      )}
    </div>
  )}
</div>
        </div>

      </div>

      <nav className="navigation container">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/produtos">
          Produtos
        </NavLink>

        <Link to="/produtos">
         Categorias
        </Link>

        <NavLink to="/pedidos">
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;