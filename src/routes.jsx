import App from "./App";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/Homepage/Homepage";
import Shop from "./components/Shop/Shop";
import ErrorPage from "./components/ErrorPage";
import Product from "./components/Product/Product";

// To Implement ErrorPage from ./ErrorPage
// errorElement: <ErrorPage />

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
    ],
  },
];

export default routes;
