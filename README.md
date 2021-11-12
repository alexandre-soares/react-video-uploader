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

Change the API Key which is located on the uploader.component.jsx file.

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
      apiKey: "to6IC1ehLEWyGyLbpa9HqOrW",
    };
  }
```

You can ask for an API key on the Authenticate Page (https://docs.api.video/reference/post_auth-api-key) once you're registered