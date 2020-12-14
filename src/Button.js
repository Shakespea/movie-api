import React, { useState } from "react";

function Button(props) {
  const { overview } = props;
  var shortOverview = overview.substring(0, 109);
  const [state, stateChange] = useState(shortOverview);
  function mouseOn() {
    stateChange(overview);
  }
  function mouseOut() {
    stateChange(shortOverview + "...");
  }
  return (
    <p onMouseOver={mouseOn} onMouseOut={mouseOut}>
      {state}
    </p>
  );
}

export default Button;
