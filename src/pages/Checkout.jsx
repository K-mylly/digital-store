
import { useLocation, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "../styles/checkout.css";

function Checkout() {
  const location = useLocation();
  const { cartItems } = useCart();

  // Verifica se o usuário veio diretamente de um produto
  const selectedProduct = location.state?.product;

  // Se veio de um produto, mostra apenas ele.
  // Caso contrário, utiliza os produtos do carrinho.
  const checkoutItems = selectedProduct
    ? [{ ...selectedProduct, quantity: location.state.quantity || 1 }]
    : cartItems;

  const subtotal = checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  if (checkoutItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="checkout-container">
          <h1>Nenhum produto selecionado</h1>
          <p>Adicione um produto antes de finalizar sua compra.</p>
          <Link to="/produtos">Voltar para produtos</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-container">
        <h1>Finalizar Compra</h1>

        <div className="checkout-content">

          <div className="checkout-forms">

            <section className="checkout-card">
              <h2>Informações Pessoais</h2>

              <div className="checkout-field">
                <label>Nome Completo *</label>
                <input type="text" placeholder="Insira seu nome" />
              </div>

              <div className="checkout-field">
                <label>CPF *</label>
                <input type="text" placeholder="Insira seu CPF" />
              </div>

              <div className="checkout-field">
                <label>E-mail *</label>
                <input type="email" placeholder="Insira seu email" />
              </div>

              <div className="checkout-field">
                <label>Celular *</label>
                <input type="tel" placeholder="Insira seu celular" />
              </div>
            </section>

            <section className="checkout-card">
              <h2>Informações de Entrega</h2>

              <div className="checkout-field">
                <label>Endereço *</label>
                <input type="text" placeholder="Insira seu endereço" />
              </div>

              <div className="checkout-field">
                <label>Bairro *</label>
                <input type="text" placeholder="Insira seu bairro" />
              </div>

              <div className="checkout-field">
                <label>Cidade *</label>
                <input type="text" placeholder="Insira sua cidade" />
              </div>

              <div className="checkout-field">
                <label>CEP *</label>
                <input type="text" placeholder="Insira seu CEP" />
              </div>

              <div className="checkout-field">
                <label>Complemento</label>
                <input type="text" placeholder="Insira complemento" />
              </div>
            </section>

            <section className="checkout-card">
              <h2>Informações de Pagamento</h2>

              <div className="checkout-field">
                <label>Forma de Pagamento</label>

                <div className="payment-options">
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="credit"
                      defaultChecked
                    />
                    Cartão de Crédito
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="boleto"
                    />
                    Boleto Bancário
                  </label>
                </div>
              </div>

              <div className="checkout-field">
                <label>Nome do Cartão *</label>
                <input type="text" placeholder="Insira o nome do Cartão" />
              </div>

              <div className="checkout-payment-grid">
                <div className="checkout-field">
                  <label>Número do Cartão *</label>
                  <input type="text" placeholder="Número do Cartão" />
                </div>

                <div className="checkout-field">
                  <label>Validade do Cartão *</label>
                  <input type="text" placeholder="Validade do Cartão" />
                </div>

                <div className="checkout-field">
                  <label>CVV *</label>
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            </section>

            <section className="checkout-card checkout-final">
              <h2>Finalizar Compra</h2>

              <div className="checkout-final-total">
                <strong>Total</strong>
                <strong>{formatPrice(subtotal)}</strong>
              </div>

              <button type="button" className="checkout-button">
                Realizar Pagamento
              </button>
            </section>

          </div>

          <aside className="checkout-summary">
            <h2>RESUMO</h2>

            {checkoutItems.map((item) => (
              <div className="summary-product" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div>
                  <strong>{item.name}</strong>
                  <p>Quantidade: {item.quantity}</p>
                  <p>{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}

            <div className="summary-values">
              <div>
                <span>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              <div>
                <span>Frete:</span>
                <span>R$ 0,00</span>
              </div>

              <div>
                <span>Desconto:</span>
                <span>R$ 0,00</span>
              </div>
            </div>

            <div className="summary-total">
              <strong>Total</strong>

              <div>
                <strong>{formatPrice(subtotal)}</strong>
                <small>Valor demonstrativo</small>
              </div>
            </div>

            <button type="button" className="checkout-button">
              Realizar Pagamento
            </button>
          </aside>

        </div>
      </div>
    </main>
  );
}

export default Checkout;
