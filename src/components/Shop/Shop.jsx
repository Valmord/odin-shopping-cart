// import { createContext, useContext, useEffect, useState } from "react";
import CardContainer from "./CardContainer";
import { useOutletContext } from "react-router";

const Shop = function Shop() {
  const { loading, error, products } = useOutletContext();

  if (loading) return <main>Loading.....</main>;
  if (error) return <main>A network error occurred</main>;

  return (
    <main>
      <h2>Store products:</h2>
      <CardContainer cards={products}></CardContainer>
    </main>
  );
};

export default Shop;
