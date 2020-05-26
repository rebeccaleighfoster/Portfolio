import React from "react";
import Header from "./Header";
function ContactMe(props) {
  return (
    <>
      <Header />
      <div className="info">
        <div className="bigInfo"> Let's Connect!</div>
        <p>
          Currently, I am actively looking for a new full-time position. If you
          are interested in hiring me I'd love to talk to you! If you would like to
          talk with me, feel free to fill out the form below, or you can reach
          on social media:
        </p>
      </div>
    </>
  );
}

export default ContactMe;
