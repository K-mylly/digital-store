
import { Link } from "react-router-dom";
import {
  Shirt,
  GalleryVerticalEnd,
  Headphones,
  Footprints,
  ArrowRight,
} from "lucide-react";

import products from "../data/products";
import ProductGrid from "../components/ProductGrid";

import "../styles/home.css";

const categories = [
  { name: "Camisetas", slug: "camisetas", icon: Shirt },
  { name: "Calças", slug: "calcas", icon: GalleryVerticalEnd },
  { name: "Bonés", slug: "bones", icon: GalleryVerticalEnd },
  { name: "Headphones", slug: "headphones", icon: Headphones },
  { name: "Tênis", slug: "tenis", icon: Footprints },
];

function Home() {
  return (
    <main className="home-page">

      {/* Banner principal */}
      <section className="hero">
        <div className="container hero-content">

          <div className="hero-text">
            <span>Melhores ofertas personalizadas</span>

            <h1>
              Queima de
              <br />
              estoque Nike 🔥
            </h1>

            <p>
              Conseguat culpa exercitation mollit nisi
              exceptuer do tempor laboris eiusmod
              irure consectetur.
            </p>

            <Link to="/produtos" className="primary-button">
              Ver Ofertas
            </Link>
          </div>

          <div className="hero-image">
            <img
              src="/images/nike-air-force.png"
              alt="Tênis Nike branco com detalhes vermelhos"
            />
          </div>

        </div>
      </section>

      {/* Coleções em destaque */}
      <section className="collections container">

        <h2>Coleções em destaque</h2>

        <div className="collection-grid">

          <div className="collection-card supreme">
            <span className="collection-discount">30% OFF</span>
            <h3>Novo drop<br />Supreme</h3>
            <Link to="/produtos">Comprar</Link>
            <img src="/images/supreme-shirt.png" alt="Camiseta Supreme" />
          </div>

          <div className="collection-card adidas">
            <span className="collection-discount">30% OFF</span>
            <h3>Coleção<br />Adidas</h3>
            <Link to="/produtos">Comprar</Link>
            <img src="/images/adidas-shoes.png" alt="Tênis Adidas" />
          </div>

          <div className="collection-card beats">
            <span className="collection-discount">30% OFF</span>
            <h3>Novo<br />Beats Bass</h3>
            <Link to="/produtos">Comprar</Link>
            <img src="/images/beats-headphones.png" alt="Headphones Beats" />
          </div>

        </div>
      </section>

      {/* Categorias */}
      <section className="categories container">

        <h2>Coleções em destaque</h2>

        <div className="category-list">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
  to={`/colecoes/${category.slug}`}
  className="category-item"
  key={category.name}
>
                <div className="category-icon">
                  <Icon size={34} strokeWidth={1.2} />
                </div>

                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>

      </section>

      {/* Produtos em alta */}
      <section className="featured-products container">

        <div className="section-heading">
          <h2>Produtos em alta</h2>

          <Link to="/produtos">
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>

        <ProductGrid products={products.filter((product) => product.featured)} />

      </section>

      {/* Oferta especial */}
      <section className="special-offer">
        <div className="container offer-content">

          <div className="offer-image">
            <img
              src="/images/air-jordan.png"
              alt="Air Jordan edição de colecionador"
            />
          </div>

          <div className="offer-text">
            <span>Oferta especial</span>

            <h2>Air Jordan edição de colecionador</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <Link to="/produtos" className="primary-button">
              Ver Oferta
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;