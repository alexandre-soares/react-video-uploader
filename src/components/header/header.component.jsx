import React, { Component } from "react";

import "./header.styles.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src="../../alex.png" alt="logo" className="icon icon--big" />
        <h1>Upload a video to api.video</h1>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/alexandre-soares/react-video-uploader"
        >
          <img src="../../icons/github.png" alt="github" className="icon"/>
        </a>
      </div>
    );
  }
}

export default Header;
