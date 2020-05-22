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
          shabby cfjdsljfkdls;jfkdsl;jfdksl;jfdksl;fjdkhic fixie semiotics. Meditation sriracha banjo pour-over.
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
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-3.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-108.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-160.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-239.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-248.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-255.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-258.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-260.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("../images/weaving/033119_JeanHughesPortraitsLoom-108.jpg"),
    width: 1,
    height: 1,
  },
];
