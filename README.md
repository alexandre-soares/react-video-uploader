# React Video Uploader

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Learn More

This project has been made with the help of the api.video API (https://api.video/)

## How to use

Change the upload token which is located on the uploader.component.jsx file and then run npm start.
You should access the application on http://localhost:3000, then you just need to click on the input (or the choose file button) and choose the video you want to upload. After that, you should see a progress bar and a final success message with the link to see the video.

You should also be able to access all your uploaded videos on this link (https://go.api.video/?title=&sortOrder=desc&sortBy=publishedAt)

# How to generate the upload token

1. Register on the api.video platform (https://dashboard.api.video/login)
2. Once registered, go on your dashboard (https://dashboard.api.video/apikeys) and copy your Sandbox API key
3. Then go on the Authenticate page (https://docs.api.video/reference/post_auth-api-key) and submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds)
4. Copy the access token and go on the Generate an upload token (https://docs.api.video/reference/post_upload-tokens) and use this endpoint to generate an upload token
5. Replace "YOUR_UPLOAD_TOKEN" with the token you received 

uploader.component.jsx

```
constructor() {
    super();

    // Defining variables in state
    this.state = {
      videoId: "",
      playerUrl: "",
      totalPercentComplete: 0,
      showProgressBar: false,
      // Change your API key here
      uploadToken: "YOUR_UPLOAD_TOKEN",
    };
  }
```

Enjoy!