import { Link } from "react-router";

const ErrorPage = function ErrorPage() {
  return (
    <main>
      <h2>It seems something went wrong...</h2>
      <Link to="/">Return to home</Link>
    </main>
  );
};

export default ErrorPage;
