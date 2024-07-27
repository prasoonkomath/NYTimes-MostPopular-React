# NY Times Most Popular Articles

NY Times Most Popular Articles - React App

## Documentation

[NY Times API Documentation](https://developer.nytimes.com/apis)

## Description

Build a simple React Aapp to hit the NY Times Most Popular Articles API and show a list of articles that shows details when items on the list are tapped (a typical master/detail web app).


## Screenshots

### Desktop

![HomePage](https://prasoonk.net/temp/d-l-min.png 'Home Page')

![DetailsPage](https://prasoonk.net/temp/d-d-min.png 'Details Page')

### Mobile

![HomePageMobile](https://prasoonk.net/temp/m-l-min.png 'Home Page Mobile')

![DetailsPageMobile](https://prasoonk.net/temp/m-d-min.png 'Details Page Mobile')

## Installation

Installs the necessary dependencies required for the project.


```bash
npm install
```

## Usage

Follow the instructions here to create an account, in order to generate an API Key:

[NY Times API - Get Started](https://developer.nytimes.com/get-started)

Paste the generated API Key inside `.env`: `REACT_APP_API_KEY='your-api-key'`

## Start the app:

Runs the app in development mode.

```bash
npm start
```

It will automatically open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

## Test the app

Run the following commands to run the unit tests and generate coverage reports:

```bash
npm run test
```
Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### Generate Test Coverage

To generate test coverage reports, run:

```bash
npx jest --coverage
```
Generates and displays the test coverage report.\
After running the command, a `coverage` folder will be created in the project directory. You can open the `index.html` file in the `coverage/lcov-report` folder to view the coverage report in your browser.

## Build the app

Builds the app for production to the `build` folder.

```bash
npm run build
```
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!


## Eject

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

```bash
npm run eject
```

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



## License

[MIT](https://github.com/LexIliev/ny-times-articles/blob/master/LICENSE)