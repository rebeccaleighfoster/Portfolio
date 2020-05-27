import React from "react";
import { Link } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <div>
          <img
            src={require("../images/logo-start.png")}
            className="logo"
          ></img>
      </div>
    );
  }
}

export default Logo;
