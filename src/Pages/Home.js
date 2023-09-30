import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductsList from "../components/products";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from "../components/form";
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/navbar'
import { addToFavorites, removeFromFavorites } from '../favoritesActions';
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

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  
  const isFavorite = favorites.includes(products.id);
  const toggleFavorite = () => {
    
    if (isFavorite) {
      dispatch(removeFromFavorites(products.id));
    } else {
      dispatch(addToFavorites(products.id));
    }
  };

  return (
    <div>
      <Navbar />
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
                  hundelfavorit={toggleFavorite}
                  content={isFavorite ? '❤️' : '🤍'}
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
                  hundelfavorit={toggleFavorite}
                  content={isFavorite ? '❤️' : '🤍'}
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
