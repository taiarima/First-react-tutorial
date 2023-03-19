import React from "react";
import { useEffect } from "react";
import "./App.css";

import SearchIcon from "./search.svg";

// 990f1ee5

const API_URL = `http://www.omdbapi.com?apikey=990f1ee5`;
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies(`Army of Darkness`);
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Movie"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p></p>
          </div>
          <div>
            <img
              src={
                Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"
              }
            />
          </div>
          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
