To Do:

1. Check if the branches are good.

---

Homework for school project:

1. Get the like feature to work where you can like any of your favorites, but it does not persist or connect to the rails backend. Likes reset to 0 after page refreshes
2. In a separate branch, get the likes of each favorite to persist AND connect to redux. SO if we refresh the page the number of likes remain for each favorite

---

## Parts:

1. App.js: Renders the home page with button navigation. _Done_
2. Form.js: renders the search form that the user enters a keyword for recipe search.
3. RecipeSearch.js: Sends a fetch call to the recipe API to get a listing of recipes.
4. Recipes.js: Lists the results of the fetch.
   -User can click likes here.
5. Recipe.js: Shows the single recipe that the user has selected from the search results.
   -User can click likes.
6. CreatePlan.js: Clicking the button on the homepage directs you here. Uses RecipesSearch,
   Form.js, Recipes.js, and Recipe.js.
7. App.css: CSS styling
8. Index.js:
9. Index.css:

## Flow:

1. User Login: App.js > click login button > login.js > App.js
   Logout path: User can logout from any page via a link or button > click logout > App.js.
2. Find a recipe: App.js > click 1st button > form.js > recipesearch.js > recipes.js > recipe.js (\*how do you incorporate clicking 'like' on a recipe?)
3. See my favorites: App.js > click 2nd button > AllFavorites.js > form.js > recipesearch.js > recipes.js > recipe.js.

---

## Parts:

1. App.js: Renders the home page with button navigation.
2. Form.js: renders the search form that the user enters a keyword for recipe search.
3. RecipeSearch.js: Sends a fetch call to the recipe API to get a listing of recipes.
4. Recipes.js: Lists the results of the fetch.
   -User can click likes here.
5. Recipe.js: Shows the single recipe that the user has selected from the search results.
   -User can click likes.
6. App.css: CSS styling
7. Index.js:
8. Index.css:
9. AllFavorites.js: All the user's favorites in no particular order.

## Flow:

1. User Login: App.js > click login button > login.js > App.js
   Logout path: User can logout from any page via a link or button > click logout > App.js.
2. Find a recipe: App.js > click 1st button > form.js > recipesearch.js > recipes.js > recipe.js (\*how do you incorporate clicking 'like' on a recipe?)
3. See my favorites: App.js > click 2nd button > AllFavorites.js > form.js > recipesearch.js > recipes.js > recipe.js.

---

## Old Notes:

1. Be sure to add components for liking/unliking with a heart in:
   - recipes.js
   - recipe.js
2. Add user login components.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

# recipes_app_v4
