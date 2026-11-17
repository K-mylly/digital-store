
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <article className="product-card">

      <Link
        to={`/produto/${product.id}`}
        className="product-image"
      >
        {product.discount && (
          <span className="discount-tag">
            {product.discount}% OFF
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <Link to={`/produto/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>

        <div className="product-prices">
          <span className="old-price">
            ${product.oldPrice}
          </span>

          <strong>${product.price}</strong>
        </div>
      </div>

    </article>
  );
}

export default ProductCard;
