
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Terminal
} from "lucide-react";

import { supabase } from "../supabaseClient";
import "./Header.css";

function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verifica se já existe alguém conectado
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    // Acompanha alterações na autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Erro ao sair:", error.message);
    }
  }

  const userName =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0];

  return (
    <header className={`header ${isLoginPage ? "header-auth" : ""}`}>
      <div className="header-main container">

        <Link to="/" className="logo">
          <Terminal size={23} strokeWidth={3} />
          <span>Digital Store</span>
        </Link>

        {!isLoginPage && (
          <>
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

              {user ? (
                <div className="user-welcome">
                  <span>
                    Bem-vindo(a), <strong>{userName}</strong>!
                  </span>

                  <button
                    type="button"
                    className="logout-button"
                    onClick={handleLogout}
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/cadastro" className="register-link">
                    Cadastre-se
                  </Link>

                  <Link to="/login" className="login-button">
                    Entrar
                  </Link>
                </>
              )}

              <Link to="/carrinho" className="cart-button">
                <ShoppingCart size={22} />
                <span className="cart-count">0</span>
              </Link>

            </div>
          </>
        )}

      </div>

      {!isLoginPage && (
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
      )}
    </header>
  );
}

export default Header;
