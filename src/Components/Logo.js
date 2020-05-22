import React from "react";
import { Link } from "react-router-dom";

class Logo extends React.Component {
  render() {
    return (
      <div>
        <Link to="/webdevelopment">
          <img
            src={require("../images/logo-start.png")}
            className="ResumePic"
          ></img>
        </Link>
      </div>
    );
  }
}

export default Logo;
