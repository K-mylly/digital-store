
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setError("Informe seu e-mail.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }

    sessionStorage.setItem("registerEmail", email.trim());

    navigate("/cadastro/dados");
  }

  return (
    <main className="register-page">
      <section className="register-card">
        <h1>Crie sua conta</h1>

        <p className="register-subtitle">
          Já possui uma conta? Entre{" "}
          <Link to="/login">aqui</Link>.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="register-email">Email *</label>

          <input
            id="register-email"
            type="email"
            placeholder="Insira seu email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
          />

          {error && <p className="register-error">{error}</p>}

          <button type="submit" className="register-button">
            Criar Conta
          </button>
        </form>

        <div className="register-social">
          <span>Ou faça login com</span>
          <span className="social-gmail" aria-label="Google">G</span>
          <span className="social-facebook" aria-label="Facebook">f</span>
        </div>
      </section>

      <div className="register-image">
        <img
          src="/images/air-jordan.png"
          alt="Tênis da Digital Store"
        />
      </div>
    </main>
  );
}

export default Register;