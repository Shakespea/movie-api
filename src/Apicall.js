import React from "react";
import Cards from "./Cards.js";
import ReactDOM from "react-dom";
import api_key from "./.gitignore";
let env = require('dotenv').config();

class movies extends React.Component {
  getMovies(clickedMenu) {
    console.log(clickedMenu);
    let request = new XMLHttpRequest();
    let url= "https://api.themoviedb.org/3/movie/";
    let api = env;
    //let data = "";
    if (clickedMenu) {
      
      request.open(
        "GET",
        url+ clickedMenu + "?api_key=" + api+ "&language=en-US&page=1",
        false
      );
      request.send(null);

      if (request.status === 200) {
        let data = JSON.parse(request.responseText).results;
        return data;
      }
  } else {
       request.open(
         "GET",
         url+ "now_playing" + "?api_key=" + api+ "&language=en-US&page=1",
         false
       );
       request.send(null);

       if (request.status === 200) {
         let data = JSON.parse(request.responseText).results;
         return data;
       }
      }   
     return {};
  }

  buildCards(newMovies) {
    return newMovies.map((result) => {
      return (
        <Cards
          img_path={result.backdrop_path}
          title={result.original_title}
          overview={result.overview}
        />
      );
    });
  }

  getNewMoviesOnClick(clickedMenu) {
    let newMovies = this.getMovies(clickedMenu);
    ReactDOM.render(
      this.buildCards(newMovies),
      document.getElementById("movieList")
    );
    return;
  }

  getDefaultMovies() {
    let newMovies = this.getMovies();
    return this.buildCards(newMovies);
  }
}

export { movies };
