import React from "react";
import Header from "./Header";

function Projects(props) {
  return (
    <div>
      <Header />
      <div className="info">
        <h2 className= "bigInfo"> Experience </h2>
        <div className="singleProject">
          <h3> Web Weavers Studio </h3>
          <p>
            A full stack application for handweavers to connect with eachother
            and log details on projects. Built with React.js, Node, Formik.{" "}
          </p>
          <img
            src={require("../images/web-weavers-studio.png")}
            className="ProjectPic"
            alt="screen shot of web weavers studio"
          ></img>
          <button className="button"> Live Link </button>
          <button className="button"> Repository </button>
        </div>
        <h3> What Should I Wear On My Hike? </h3>
        <p>
          An app to give users quick, dynamic, simple gear reccomendations about the weather 
          based off the location they want to hike. It runs by using a fetch block to the Open
          Weather API. 
        </p>
        <img
          src={require("../images/hikingapp.png")}
          className="ProjectPic"
          alt="screen shot of hiking app"
        ></img>
        <button className="button"> Live Link </button>
        <button className="button"> Repository </button>
        {/* <div className="singleProject">
          <h3> Astrocyte Quiz </h3>
          <p>
            A fun app to test your knowledge on all things Astrocytes and
            Neuroscience that utilizes HTML, CSS, JavaScript, and JQuery.{" "}
          </p>
          <button className="button"> Live Link </button>
          <button className="button"> Repository </button>
        </div> */}
        <div className="singleProject">
          <h3> Weavers Guild of Minnesota - Web Manager </h3>
          <p>
            I currently manage the Wordpress site for the Weavers Guild of
            Minnesota.
          </p>
          <img
          src={require("../images/wgm.png")}
          className="ProjectPic"
          alt="screen shot of hiking app"
        ></img>
          <button className="button"> Live Link </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;

//https://rebeccaleighfoster.github.io/astro/
