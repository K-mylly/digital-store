
import { useState } from "react";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import "../styles/products.css";

const filterGroups = [
  {
    title: "Marca",
    options: ["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"],
    type: "checkbox",
  },
  {
    title: "Categoria",
    options: ["Esporte e lazer", "Casual", "Utilitário", "Corrida"],
    type: "checkbox",
  },
  {
    title: "Gênero",
    options: ["Masculino", "Feminino", "Unisex"],
    type: "checkbox",
  },
];

function Products() {
  const [selectedBrands, setSelectedBrands] = useState([
    "Adidas",
    "K-Swiss",
  ]);

  const [selectedCategories, setSelectedCategories] = useState([
    "Esporte e lazer",
  ]);

  const [selectedGenders, setSelectedGenders] = useState([
    "Masculino",
    "Feminino",
  ]);

  const [status, setStatus] = useState("Novo");
  const [sort, setSort] = useState("relevance");

  function handleFilter(value, selected, setSelected) {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  }

  let filteredProducts = products.filter((product) => {
    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand);

    const matchesGender =
      selectedGenders.length === 0 ||
      selectedGenders.includes(product.gender);

    return matchesBrand && matchesGender;
  });

  if (sort === "lowest") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "highest") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Repete os produtos cadastrados para reproduzir a quantidade
  // de cards exibida no layout de referência.
  const displayProducts = Array.from(
    { length: 15 },
    (_, index) => ({
      ...filteredProducts[index % filteredProducts.length],
      id: `listing-${index}`,
    })
  ).filter((product) => product.name);

  return (
    <main className="products-page">
      <div className="container">

        <div className="products-topbar">
          <p>
            <strong>Resultados para "Tênis"</strong>
            <span> - 389 produtos</span>
          </p>

          <div className="sort-box">
            <label htmlFor="sort">Ordenar por:</label>
            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value)}
            >
              <option value="relevance">mais relevantes</option>
              <option value="lowest">menor preço</option>
              <option value="highest">maior preço</option>
              <option value="name">nome</option>
            </select>
          </div>
        </div>

        <div className="products-layout">

          <aside className="filters">
            <h2>Filtrar por</h2>

            {filterGroups.map((group) => {
              let selected;
              let setSelected;

              if (group.title === "Marca") {
                selected = selectedBrands;
                setSelected = setSelectedBrands;
              } else if (group.title === "Categoria") {
                selected = selectedCategories;
                setSelected = setSelectedCategories;
              } else {
                selected = selectedGenders;
                setSelected = setSelectedGenders;
              }

              return (
                <section className="filter-group" key={group.title}>
                  <h3>{group.title}</h3>

                  {group.options.map((option) => (
                    <label className="filter-option" key={option}>
                      <input
                        type="checkbox"
                        checked={selected.includes(option)}
                        onChange={() =>
                          handleFilter(option, selected, setSelected)
                        }
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </section>
              );
            })}

            <section className="filter-group">
              <h3>Estado</h3>

              {["Novo", "Usado"].map((option) => (
                <label className="filter-option" key={option}>
                  <input
                    type="radio"
                    name="status"
                    checked={status === option}
                    onChange={() => setStatus(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </section>
          </aside>

          <section className="products-results">
            <ProductGrid products={displayProducts} />
          </section>

        </div>
      </div>
    </main>
  );
}

export default Products;
