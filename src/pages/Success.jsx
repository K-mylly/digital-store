import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import "../styles/success.css";

function Success() {
  const name = sessionStorage.getItem("registeredName") || "";

  return (
    <main className="success-page">
      <section className="success-card">
        <div className="success-icon">
          <CheckCircle2 size={58} strokeWidth={1.8} />
        </div>

        <h1>Conta criada com sucesso!</h1>

        <p className="success-welcome">
          {name ? `Seja bem-vindo(a), ${name}!` : "Seja bem-vindo(a)!"}
        </p>

        <p className="success-description">
          Sua conta na Digital Store foi criada.
          Agora você já pode acessar sua conta e
          aproveitar nossas ofertas e novidades.
        </p>

        <Link to="/" className="success-button">
          Ir para a página inicial
        </Link>

        <p className="success-footer">
          Obrigado por escolher a Digital Store!
        </p>
      </section>
    </main>
  );
}

export default Success;