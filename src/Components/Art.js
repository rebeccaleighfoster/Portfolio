import Gallery from "react-photo-gallery";
import React from "react";
import Header from "./Header";

export default class Sample extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="info">
          <div className="bigInfo"> Textile Art</div>
          weaving weaving weaving Plaid gentrify put a bird on it, pickled XOXO
          farm-to-table irony raw denim messenger bag leggings. Hoodie PBR&B
          photo booth, vegan chillwave meh paleo freegan ramps. Letterpress
          shabby chic fixie semiotics. Meditation sriracha banjo pour-over.
          Gochujang pickled hashtag mixtape cred chambray. Freegan microdosing
          VHS, 90's bicycle rights aesthetic hella PBR&B.
          <Gallery photos={PHOTO_SET} />
        </div>
      </>
    );
  }
}

const PHOTO_SET = [
  {
    src: "./images/IMG_0509.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "http://example.com/example/img2.jpg",
    width: 1,
    height: 1,
  },
];
