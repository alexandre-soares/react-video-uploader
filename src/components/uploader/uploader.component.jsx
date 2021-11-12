import React, { Component } from "react";
import { VideoUploader } from "@api.video/video-uploader";

import "./uploader.styles.css";

class Uploader extends Component {
  constructor() {
    super();

    this.state = {
      videoId: "",
      playerUrl: "",
    };
  }

  uploadFile = (event) => {
    console.log("upload commencing");
    const uploader = new VideoUploader({
      file: event.target.files[0],
      uploadToken: "to6IC1ehLEWyGyLbpa9HqOrW",
      chunkSize: 1024 * 1024 * 10, // 10MB
      retries: 10,
    });
    uploader.onProgress((event) => {
      var totalPercentComplete = Math.round(
        (event.uploadedBytes / event.totalBytes) * 100
      );
      document.getElementById("chunk-information").innerHTML =
        "Total uploaded: " + totalPercentComplete + "%";
    });

    uploader.upload().then((video) => {
      this.playerUrl = video.assets.player;
      console.log("all uploaded! Watch here: ", this.playerUrl);

      document.getElementById("video-information").innerHTML =
        "Everyting is uploaded! You can watch the video <a href='" +
        this.playerUrl +
        "' target='_blank'>here</a>";
    });
  };

  render() {
    return (
      <div className="Uploader">
        <div id="action__upload">
          <img
            id="uploadFile__icon"
            draggable="false"
            src="../../icons/upload.png"
            alt="upload"
            className="Icon"
          />
          <br />

          <div class="mb-3">
            <label
              htmlFor="formFile"
              id="video-file-label"
              className="form-label"
            >
              Click here to upload a video
            </label>
            <input
              className="form-control"
              onChange={this.uploadFile}
              type="file"
              id="video-file"
            />
          </div>

          <br />
          <br />

          <div id="chunk-information" className="alert alert-success"></div>
          <div id="video-information" className="alert alert-success"></div>
        </div>
      </div>
    );
  }
}

export default Uploader;
