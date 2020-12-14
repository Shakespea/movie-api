import React from "react";
import "./styles.css";
import { Navbar } from "./Navbar.js";
import Cards from "./Cards.js";
import { movies } from "./Apicall.js";

let movieHandle = new movies();

export default function App() {
  return (
    <div>
      <Navbar />
      <div id="movieList">{movieHandle.getDefaultMovies()}</div>
    </div>
  );
}
