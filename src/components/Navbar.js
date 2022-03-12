import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar">
      <h1>Search Hacker News</h1>
      {!(location.pathname === "/search") && (
        <nav>
          <Link to="/search">
            <button>Search</button>
          </Link>
        </nav>
      )}
      {!(location.pathname === "/history") && (
        <nav>
          <Link to="/history">
            <button>History</button>
          </Link>
        </nav>
      )}
    </div>
  );
}
