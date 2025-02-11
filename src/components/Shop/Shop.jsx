import { useEffect, useState } from "react";
import CardContainer from "./CardContainer";

const Shop = function Shop() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const getShoppingItems = async function getShoppingItems() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        console.log(result);
        setCards(result);
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

  if (loading) return <main>Loading.....</main>;
  if (error) return <main>A network error occured</main>;

  return (
    <main>
      <h2>Welcome to the shop!</h2>
      <CardContainer cards={cards}></CardContainer>
    </main>
  );
};

export default Shop;
