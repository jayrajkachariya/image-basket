## Image Basket

Image Basket is small prototype of Google image search. It fetches data from ShutterStock API and shows images accordingly. This is testing based project and having no commercial use case.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br> This script will do two tasks concurrently. It will start react app on port `3000` and node app on port `5000`. Node app here will serve one api, which will eventually call ShutterStock api to fetch 25 images at a time and will return them as response. Then we will use that response to show images on front.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
