import React, { useState } from "react";
import Button from "./Button.js";

var image1 = "https://image.tmdb.org/t/p/w780";

function Cards(props) {
  //console.log(props);
  const { img_path, title, overview } = props;
  //console.log(img_path);
  return (
    <div class="card">
      <img src={image1 + img_path} alt="Avatar" style={{ width: "" }}></img>
      <div class="container">
        <h4>
          <b>{title}</b>
        </h4>
        <Button overview={overview} />
      </div>
    </div>
  );
}

export default Cards;
