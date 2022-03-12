import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Search from "./components/Search";
import History from "./components/History";
import Navbar from "./components/Navbar";

function App() {
  const [history, setHistory] = useState([]);

  const handleHistory = (search) => {
    setHistory([...history, search]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/search" />}></Route>
          <Route
            path="/search"
            element={<Search handleHistory={handleHistory} />}
          ></Route>
          <Route
            path="/history"
            element={<History history={history} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
