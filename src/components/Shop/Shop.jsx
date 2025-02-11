import { useEffect, useState } from "react";

const Shop = function Shop() {
  const [cards, setCards] = useState([]);

  useEffect(() => {}, []);

  return (
    <main>
      <h2>Welcome to the shop!</h2>
      <section className="card-container"></section>
    </main>
  );
};

export default Shop;
