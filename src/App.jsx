// import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import CartProvider from "./components/CartContext";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const getShoppingItems = async function getShoppingItems() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        console.log(result);
        setProducts(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    getShoppingItems();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <CartProvider>
        <Navbar />
        <Outlet context={{ loading, error, products }} />
      </CartProvider>
    </>
  );
}

export default App;
