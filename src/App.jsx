import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import Card from "./components/Card";
import products from "./db/Data";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filter by selected category
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title.toLowerCase().includes(selected.toLowerCase()) ||
          newPrice === selected
      );
    }

    // Filter by search query
    if (query) {
      filteredProducts = filteredProducts.filter(
        ({ title }) =>
          title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          addToCart={() => addToCart({ img, title, reviews, prevPrice, newPrice })}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} shoppingCart={shoppingCart} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
