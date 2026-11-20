import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setMessage("");
    setLoading(true);

    try {
      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) throw loginError;

      navigate("/");
    } catch (err) {
      setError(
        err.message === "Invalid login credentials"
          ? "E-mail ou senha incorretos."
          : err.message
      );
    } finally {
      setLoading(false);
    }
  }

  function handleForgotPassword() {
    setMessage(
      "A recuperação de senha será disponibilizada em breve."
    );
  }

  return (
    <main className="login-page">
      <div className="login-content">
        <section className="login-card">
          <h1>Acesse sua conta</h1>

          <p className="login-subtitle">
            Novo cliente? Então registre-se{" "}
            <Link to="/cadastro">aqui</Link>.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="login-email">Login *</label>
              <input
                id="login-email"
                type="email"
                placeholder="Insira seu login ou email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                  setMessage("");
                }}
                required
              />
            </div>

            <div className="login-field">
              <label htmlFor="login-password">Senha *</label>
              <input
                id="login-password"
                type="password"
                placeholder="Insira sua senha"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setError("");
                }}
                required
              />
            </div>

            <button
              type="button"
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Esqueci minha senha
            </button>

            {error && (
              <p className="login-error">{error}</p>
            )}

            {message && (
              <p className="login-message">{message}</p>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Acessar Conta"}
            </button>
          </form>

          <div className="login-social">
            <span>Ou faça login com</span>
            <span className="login-google" aria-label="Google">
              G
            </span>
            <span className="login-facebook" aria-label="Facebook">
              f
            </span>
          </div>
        </section>

        <div className="login-image">
          <img
            src="/images/air-jordan.png"
            alt="Tênis esportivo"
          />
        </div>
      </div>
    </main>
  );
}

export default Login;