# Great Meals - Final Microverse capstone project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This was by far the most complete project I've built so far. It challenged me to improve my codding skills to create a great APP that I'm proud of.

A special thanks to Microverse, and the TSEs that reviewed this project and gave me tips on how to improve my project.

## Project specifications

### Using [TheMealDB](https://www.themealdb.com/api.php) API

Using TheMealDB API to fetch data and display with react components.
Using axios to fetch API data.

Fetching all categories on page load (https://www.themealdb.com/api/json/v1/1/categories.php) to update all available categories.

Setting the default category as "Vegetarian" when creating the redux store, so all recipes from that category are displayed.

Fetching all recipes from a category (https://www.themealdb.com/api/json/v1/1/lookup.php?i={recipeID}).

## Thunk

Using thunk on the Redux store as a middle ware to fetch async data from the API calls. With Thunk I'm fetching data from the API calls and sending the dispatch to the store as a promise, and updating the data when the promise is fulfilled.

The only thing needed was to import the necessary libraries for thunk, promise and middle ware, and apply to the store. This setting is in the `./src/store.js` file.

## Redux Store

Setup the Redux store to have all categories, the current displayed category, all recipes for the current displayed category and the displayed recipe. In the `./src/reducers/index.js` I combined all the reducers, and on the `./src/store.js` applied the middle ware mentioned previously. The redux store is imported in `./src/index.js` and passed to the Provider to all React components.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
