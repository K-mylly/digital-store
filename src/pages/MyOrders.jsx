
import { Link } from "react-router-dom";
import "../styles/my-orders.css";

const orders = [
  {
    id: "2234981932",
    name: "Tênis Nike Air Force",
    image: "/images/nike-air-force.png",
    status: "Produto em trânsito",
    statusClass: "in-transit",
  },
  {
    id: "445810492",
    name: "Tênis Adidas Shoes",
    image: "/images/adidas-shoes.png",
    status: "Finalizado",
    statusClass: "finished",
  },
  {
    id: "445810493",
    name: "Tênis Air Jordan",
    image: "/images/air-jordan.png",
    status: "Cancelado",
    statusClass: "canceled",
  },
  {
    id: "445810494",
    name: "Tênis K-Swiss V8",
    image: "/images/k-swiss-v8.png",
    status: "Finalizado",
    statusClass: "finished",
  },
  {
    id: "445810495",
    name: "Tênis Nike Air Force",
    image: "/images/nike-air-force.png",
    status: "Finalizado",
    statusClass: "finished",
  },
];

function MyOrders() {
  return (
    <main className="my-orders-page">
      <div className="my-orders-container">

        <aside className="profile-menu">
          <h3>Meu Perfil</h3>

          <nav>
            <Link to="/pedidos" className="active">
              Meus Pedidos
            </Link>
            <Link to="/minhas-informacoes">
              Minhas Informações
            </Link>
            <Link to="/metodos-pagamento">
              Métodos de Pagamento
            </Link>
          </nav>
        </aside>

        <section className="orders-content">
          <div className="orders-header">
            <h3>Meus Pedidos</h3>
            <span>STATUS</span>
          </div>

          <div className="orders-list">
            {orders.map((order) => (
              <div className="order-item" key={order.id}>
                <div className="order-product">
                  <img src={order.image} alt={order.name} />

                  <div>
                    <span>Pedido nº {order.id}</span>
                    <h4>{order.name}</h4>
                  </div>
                </div>

                <span className={`order-status ${order.statusClass}`}>
                  {order.status}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default MyOrders;
