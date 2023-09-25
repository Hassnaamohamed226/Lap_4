import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductsList from "../components/products";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from "../components/form";
const HomeScreen = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products list using Axios
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Handle input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call API with searchQuery
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      setSearchResults(response.data.products);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Form
        onsubmit={handleSubmit}
        onchange={handleInputChange}
        fvalue={searchQuery}
      ></Form>
      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>

          {searchResults.map((result) => (
            <div
              key={result.id}
              className=" d-flex flex-wrap justify-content-center align-items-center gap-4 py-2"
            >
              <Link to={`/products/${products.id}`}>
                <ProductsList
                  pimage={result.thumbnail}
                  ptitle={result.title}
                  pdescription={result.description}
                />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>All Products</h2>

          {products.map((result) => (
            <div
              key={result.id}
              className=" d-flex flex-wrap justify-content-center align-items-center gap-4 py-2"
            >
              <Link to={`/products/${result.id}`}>
                <ProductsList
                  pimage={result.thumbnail}
                  ptitle={result.title}
                  pdescription={result.description}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
