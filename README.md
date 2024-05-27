# Stratex Movie List

This project is a React application created using `create-react-app`. It allows users to view a list of movies, add movies to a favorites list, and view the favorites list. The project uses Redux for state management and Axios for fetching data from an external API.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Running the App](#running-the-app)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the application, follow these steps:

1. **Clone the repository:**

# Your bash commands go here

git clone https://github.com/your-username/stratex_movie_list.git
cd stratex_movie_list

2. **Install dependencies:**

# Your bash commands go here

npm install

## Configuration

**Environment Variables**

To configure the application, you need to set up environment variables. Create a .env file in the root directory and add the following:

# Displaying Environment Variables

REACT_APP_URL=https://dummyapi.online/api/movies

## Running the App

To start the application in development mode, run:

# Your bash commands go here

npm start

This will run the app in development mode, and it will be accessible at http://localhost:3000.

## Folder Structure

Here's an overview of the project's folder structure:

```java

stratex_movie_list/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── Favoritelist.js
│   │   ├── Moviecard.js
│   │   └── Movieslist.js
│   ├── redux/
│   │   ├── movie.slice.js
│   │   └── store.js
│   ├── styles/
│   │   └── movies.css
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

```
## Available Scripts

In the project directory, you can run the following scripts:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run eject`

> Note: this is a one-way operation. Once you eject, you can't go back!

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you are on your own.


## Contributing

Contributions are welcome! Please create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.




