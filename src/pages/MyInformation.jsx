
import { Link } from "react-router-dom";
import "../styles/my-information.css";

function MyInformation() {
  return (
    <main className="my-information-page">
      <div className="my-information-container">

        <aside className="profile-menu">
          <h3>Meu Perfil</h3>

          <nav>
            <Link to="/pedidos">Meus Pedidos</Link>
            <Link to="/minhas-informacoes" className="active">
              Minhas Informações
            </Link>
            <Link to="/metodos-pagamento">
              Métodos de Pagamento
            </Link>
          </nav>
        </aside>

        <section className="information-content">
          <div className="information-header">
            <h3>Minhas Informações</h3>
            <button type="button">Editar</button>
          </div>

          <div className="information-section">
            <h4>Informações Pessoais</h4>

            <p><span>Nome:</span> Francisco Antonio Pereira</p>
            <p><span>CPF:</span> 000.000.000-00</p>
            <p><span>Email:</span> exemplo@email.com</p>
            <p><span>Celular:</span> (00) 00000-0000</p>
          </div>

          <div className="information-section delivery-information">
            <h4>Informações de Entrega</h4>

            <p><span>Endereço:</span> Rua Exemplo, 333</p>
            <p><span>Bairro:</span> Centro</p>
            <p><span>Cidade:</span> Fortaleza, Ceará</p>
            <p><span>CEP:</span> 00000-000</p>
          </div>
        </section>

      </div>
    </main>
  );
}

export default MyInformation;
