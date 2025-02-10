import { createBrowserRouter } from "react-router";
import App from "./App";

// To Implement ErrorPage from ./ErrorPage
// errorElement: <ErrorPage />

const routes = [
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />
  },
];

export default routes;
