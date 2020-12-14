import React from "react";
import Cards from "./Cards.js";
import ReactDOM from "react-dom";
require('dotenv').config();

//process.env.API-KEY;
class movies extends React.Component {
  getMovies(clickedMenu) {
    console.log(clickedMenu);
    let request = new XMLHttpRequest();
    let url= "https://api.themoviedb.org/3/movie/";
    let api = "4c2d7f5a8af2d48377e9431af1a091f2";
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
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4c2d7f5a8af2d48377e9431af1a091f2&language=en-US&page=1",
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
    //console.log(data);
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
