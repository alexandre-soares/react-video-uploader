import React, { Component } from "react";
import { VideoUploader } from "@api.video/video-uploader";

import "./uploader.styles.css";

class Uploader extends Component {
  constructor() {
    super();

    // Defining variables in state
    this.state = {
      videoId: "",
      playerUrl: "",
      totalPercentComplete: 0,
      showProgressBar: false,
      apiKey: "to6IC1ehLEWyGyLbpa9HqOrW",
    };
  }

  // upload file function (event is here to get the video)
  uploadFile = (event) => {
    // start uploading
    const uploader = new VideoUploader({
      file: event.target.files[0],
      uploadToken: this.state.apiKey,
      chunkSize: 1024 * 1024 * 10, // 10MB
      retries: 10,
    });

    // on progress to track uploading process (progress bar)
    uploader.onProgress((event) => {
      // show progress bar
      this.setState({
        showProgressBar: true,
      });

      // define percentage uploading progress
      this.setState({
        totalPercentComplete: Math.round(
          (event.uploadedBytes / event.totalBytes) * 100
        ),
      });
    });

    // when upload is finished, show video alert with the link to see the video
    uploader.upload().then((video) => {
      this.playerUrl = video.assets.player;
      // creating video success alert
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

          {/* Form */}

          <div className="form">
            <label
              htmlFor="formFile"
              id="video-file-label"
              className="form-label"
            >
              Click on the input below to upload a video
            </label>
            <input
              className="form-control"
              onChange={this.uploadFile}
              type="file"
              id="video-file"
            />
          </div>

          <br />

          {/* Progress bar div */}

          {this.state.showProgressBar ? (
            <div className="progress mb-6">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: this.state.totalPercentComplete + "%" }}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {this.state.totalPercentComplete}%
              </div>
            </div>
          ) : null}

          {/* Video information alert div */}

          <div id="video-information" className="alert alert-success"></div>
        </div>
      </div>
    );
  }
}

export default Uploader;
