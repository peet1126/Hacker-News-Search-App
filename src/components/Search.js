import { useState } from "react";
import useGet from "../hooks/useGet";
import Stories from "./Stories";

export default function Search({ handleHistory }) {
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState(null);

  // use hook to get search results from the HN Algolia API
  let { data, loading, error } = useGet(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl("http://hn.algolia.com/api/v1/search?query=" + search);

    handleHistory(search);
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">Search</button>
      </form>
      {data && <Stories data={data} />}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
}
