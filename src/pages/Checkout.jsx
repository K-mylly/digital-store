
import "../styles/checkout.css";

function Checkout() {
  return (
    <main className="checkout-page">
      <div className="checkout-container">

        <h1>Finalizar Compra</h1>

        <div className="checkout-content">

          {/* COLUNA ESQUERDA */}
          <div className="checkout-forms">

            {/* INFORMAÇÕES PESSOAIS */}
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

            {/* INFORMAÇÕES DE ENTREGA */}
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

            {/* INFORMAÇÕES DE PAGAMENTO */}
            <section className="checkout-card">
              <h2>Informações de Pagamento</h2>

              <div className="checkout-field">
                <label>Forma de Pagamento</label>

                <div className="payment-options">
                  <label>
                    <input type="radio" name="payment" value="credit" defaultChecked />
                    Cartão de Crédito
                  </label>

                  <label>
                    <input type="radio" name="payment" value="boleto" />
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

            {/* FINALIZAÇÃO */}
            <section className="checkout-card checkout-final">
              <h2>Finalizar Compra</h2>

              <div className="checkout-final-total">
                <strong>Total</strong>
                <strong>R$ 219,00</strong>
              </div>

              <button type="button" className="checkout-button">
                Realizar Pagamento
              </button>
            </section>

          </div>

          {/* COLUNA DIREITA: RESUMO */}
          <aside className="checkout-summary">
            <h2>RESUMO</h2>

            <div className="summary-product">
              <img
                src="/images/nike-air-force.png"
                alt="Tênis"
              />

              <strong>
                Tênis Nike Revolution 6 Next Nature Masculino
              </strong>
            </div>

            <div className="summary-values">
              <div>
                <span>Subtotal:</span>
                <span>R$ 249,00</span>
              </div>

              <div>
                <span>Frete:</span>
                <span>R$ 0,00</span>
              </div>

              <div>
                <span>Desconto:</span>
                <span>R$ 30,00</span>
              </div>
            </div>

            <div className="summary-total">
              <strong>Total</strong>

              <div>
                <strong>R$ 219,00</strong>
                <small>ou 10x de R$ 21,90 sem juros</small>
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
