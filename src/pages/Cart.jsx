
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

function Cart() {
  const {
    cartItems,
    cartTotal,
    updateQuantity,
    removeItem,
  } = useCart();

  const formatPrice = (price) =>
    price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <main className="cart-page">
      <div className="container">

        <div className="cart-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <strong>Meu Carrinho</strong>
        </div>

        <h1>Meu Carrinho</h1>

        <section className="cart-content">

          {/* Produtos */}
          <div className="cart-products">

            <div className="cart-table-header">
              <span>MEU CARRINHO</span>
              <span>QUANTIDADE</span>
              <span>UNITÁRIO</span>
              <span>TOTAL</span>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Seu carrinho está vazio.</p>
                <Link to="/produtos">
                  Continuar comprando
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div className="cart-product" key={item.id}>

                  <div className="cart-product-details">
                    <img src={item.image} alt={item.name} />

                    <div className="cart-product-info">
                      <h3>{item.name}</h3>
                      <p>Marca: {item.brand}</p>

                      <button
                        className="cart-remove-button"
                        onClick={() => removeItem(item.id)}
                      >
                        Remover item
                      </button>
                    </div>
                  </div>

                  <div className="cart-quantity">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-unit-price">
                    {formatPrice(item.price)}
                  </div>

                  <div className="cart-item-total">
                    {formatPrice(item.price * item.quantity)}
                  </div>

                </div>
              ))
            )}

            {/* Cupom e frete */}
            <div className="cart-extras">

              <div className="cart-coupon">
                <label>Cupom de desconto</label>
                <div>
                  <input
                    type="text"
                    placeholder="Insira seu código"
                  />
                  <button type="button">OK</button>
                </div>
              </div>

              <div className="cart-shipping">
                <label>Calcular frete</label>
                <div>
                  <input
                    type="text"
                    placeholder="Insira seu CEP"
                  />
                  <button type="button">OK</button>
                </div>
              </div>

            </div>

          </div>

          {/* Resumo */}
          <aside className="cart-summary">

            <h2>RESUMO</h2>

            <div>
              <span>Subtotal:</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>

            <div>
              <span>Frete:</span>
              <strong>A calcular</strong>
            </div>

            <div>
              <span>Desconto:</span>
              <strong>R$ 0,00</strong>
            </div>

            <div className="cart-summary-total">
              <span>Total</span>
              <strong>{formatPrice(cartTotal)}</strong>
            </div>

            <button
              className="cart-checkout-button"
              type="button"
            >
              Continuar
            </button>

          </aside>

        </section>

      </div>
    </main>
  );
}

export default Cart;
