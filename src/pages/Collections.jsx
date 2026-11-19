
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";

import "../styles/collections.css";

const collectionNames = {
  camisetas: "Camisetas",
  calcas: "Calças",
  bones: "Bonés",
  headphones: "Headphones",
  tenis: "Tênis",
};

function Collections() {
  const { categoria } = useParams();

  const title = collectionNames[categoria];

  const collectionProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === title?.toLowerCase()
  );

  if (!title) {
    return (
      <main className="collection-page">
        <h2>Coleção não encontrada!</h2>
        <Link to="/">Voltar para Home</Link>
      </main>
    );
  }

  return (
    <main className="collection-page">
      <div className="container">
        <div className="collection-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{title}</span>
        </div>

        <header className="collection-header">
          <span>Explore nossa coleção</span>
          <h1>{title}</h1>
          <p>Confira os produtos disponíveis nesta categoria.</p>
        </header>

        <section className="collection-results">
          <div className="collection-heading">
            <h2>Produtos de {title}</h2>
            <span>{collectionProducts.length} produtos</span>
          </div>

          {collectionProducts.length > 0 ? (
            <ProductGrid products={collectionProducts} />
          ) : (
            <p className="empty-collection">
              Ainda não temos produtos cadastrados nesta coleção.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Collections;
