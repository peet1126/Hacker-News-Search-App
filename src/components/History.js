import React from "react";

export default function History({ history }) {
  return (
    <div className="history">
      <h1>History</h1>
      {history.length === 0 && <p>No Search History</p>}
      {history.length > 0 &&
        history.map((search, i) => (
          <div className="story-list" key={i}>
            <p>{search}</p>
          </div>
        ))}
    </div>
  );
}
