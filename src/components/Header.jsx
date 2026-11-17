import { Link, NavLink } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Terminal
} from "lucide-react";

import "./Header.css";

function Header() {
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

          <Link to="/carrinho" className="cart-button">
            <ShoppingCart size={22} />
            <span className="cart-count">0</span>
          </Link>
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