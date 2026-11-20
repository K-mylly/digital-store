
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

import "../styles/product-details.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Busca o produto pelo ID da URL
  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(0);

  // Produto não encontrado
  if (!product) {
    return (
      <main className="product-not-found">
        <h2>Produto não encontrado!</h2>
        <Link to="/produtos">Voltar para produtos</Link>
      </main>
    );
  }

  // Produtos relacionados
  const relatedProducts = products.filter(
    (item) => item.id !== product.id
  ).slice(0, 4);

  const formatPrice = (price) =>
    price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <main className="product-details-page">

      {/* Caminho de navegação */}
      <div className="container breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/produtos">Produtos</Link>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <strong>{product.name}</strong>
      </div>

      {/* Detalhes do produto */}
      <section className="container product-details">

        {/* Galeria */}
        <div className="product-gallery">

          <div className="main-product-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-thumbnails">
            <button
              className="thumbnail active"
              onClick={() => setSelectedImage(0)}
            >
              <img
                src={product.image}
                alt={product.name}
              />
            </button>
          </div>

        </div>

        {/* Informações */}
        <div className="product-info">

          <span className="product-brand">
            {product.brand} | {product.gender}
          </span>

          <h1>{product.name}</h1>

          <div className="product-rating">
            <span>★★★★★</span>
            <small> (Avaliações)</small>
          </div>

          <div className="product-prices">
  <span className="old-price">
    R$ {product.oldPrice.toFixed(2).replace(".", ",")}
  </span>

  <strong>
    R$ {product.price.toFixed(2).replace(".", ",")}
  </strong>
</div>

          {product.discount > 0 && (
            <span className="detail-discount">
              {product.discount}% OFF
            </span>
          )}

          <div className="product-description">
            <h3>Descrição do produto</h3>

            <p>
              Confira o {product.name}, da marca {product.brand}.
              Um produto da categoria {product.category},
              ideal para quem procura qualidade e estilo.
            </p>
          </div>

          <div className="product-purchase">

  <button className="buy-button">
    COMPRAR
  </button>

  <button
    className="add-cart-button"
    onClick={() => addToCart(product)}
  >
    ADICIONAR AO CARRINHO
  </button>

</div>

        </div>

      </section>

      {/* Produtos relacionados */}
      <section className="container related-products">

        <div className="related-heading">
          <h2>Produtos Relacionados</h2>

          <Link to="/produtos">
            Ver todos →
          </Link>
        </div>

        <div className="related-grid">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </div>

      </section>

    </main>
  );
}

export default ProductDetails;
