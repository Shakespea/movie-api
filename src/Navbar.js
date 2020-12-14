import React from "react";
import { movies } from "./Apicall.js";

let movieHandle = new movies();

var menu;
function Navbar(props) {
  function handleChnage(event) {
    let name = event.target.name;

    movieHandle.getNewMoviesOnClick(name);
  }
  return (
    <header>
      <div style={{ color: "white" }}>HMD Movies</div>

      <ul id="ele" className="nav__links">
        <li>
          {" "}
          <a name="now_playing" onClick={handleChnage} href="#nowPlaying">
            Now Playing
          </a>
        </li>
        <li>
          <a name="popular" onClick={handleChnage} href="#popularMovies">
            Popular
          </a>
        </li>
        <li>
          <a name="top_rated" onClick={handleChnage} href="#ratedMovies">
            Top Rated
          </a>
        </li>
        <li>
          <a
            name="upcoming"
            onClick={handleChnage}
            href="#upcomingMovies"
          >
            Upcoming 
          </a>
        </li>
      </ul>

      <form id="nav_bar" className="form-inline mr-auto">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button
          className="btn btn-unique btn-rounded btn-sm my-0"
          type="submit"
        >
          {" "}
          Search{" "}
        </button>
      </form>
    </header>
  );
}

export { Navbar, menu };
//export default Navbar;
