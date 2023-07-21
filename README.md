# Text Editor

![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)

The displayed license badge is sourced from <a href="https://shields.io/category/license">Shields IO</a>.

## Description
This Progressive Web Application (PWA) Text Editor is a browser-based application that allows users to create and manage note snippets. It showcases the implementation of PWA concepts, enabling offline usage, reliable data persistence, and a seamless user experience.

PWAs are a crucial aspect of modern web development, combining the best features of web and mobile applications. The Text Editor PWA offers offline functionality, synchronization of data, and push notifications.

With the Text Editor PWA, users can create notes, store them using IndexedDB, and continue working offline. It utilizes service workers and caching techniques for improved performance and leverages Webpack for efficient code organization and support for next-gen JavaScript.

This Text Editor was created using [starter code](https://github.com/coding-boot-camp/cautious-meme) from [Xander Rapstine](https://github.com/Xandromus), which contained contributions from <a href="https://github.com/Georgeyoo">Georgeyoo</a>.

You can access the deployed application [here](https://install-text-editor-e4e157895075.herokuapp.com/) and the GitHub repository [here](https://github.com/MCunha17/text-editor).

![Screenshot of application](/public/assets/images/note-taker-app-screenshot.png)

## Table of Contents
* [Features](#features)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Resources](#resources)
* [Questions](#questions)

## Features
* Text Editing: The Text Editor provides a user-friendly interface for creating note snippets.
* Data Persistence: The application utilizes IndexedDB to store and retrieve user data, ensuring reliable access to content even without an internet connection.
* Offline Functionality: Users can continue using the Text Editor seamlessly, even when offline.
* PWA Compatibility: The application meets the criteria of a Progressive Web Application (PWA), allowing users to install it for easy access.
* Service Worker and Caching: The application registers a service worker using Workbox, enabling the pre-caching of static assets, including subsequent pages, for improved performance.
* Webpack Bundling: JavaScript files are bundled using Webpack, optimizing the application's performance and enabling the use of next-gen JavaScript features.

## Usage
1. Navigate to https://install-text-editor-e4e157895075.herokuapp.com/ to access the Text Editor.
2. Use the Text Editor application to create note snippets. The content will be automatically saved and persisted in IndexedDB.
3. The application allows you to continue using the text editor even when offline. Any changes made offline will be synchronized with IndexedDB once an internet connection is restored.
4. To install the application as a Progressive Web Application, click on the Install button available in the browser's address bar. This will download the web application for convenient access.

## Technologies Used
* JavaScript
* IndexedDB
* Webpack
* Workbox
* Express.js
* Node.js
* Heroku

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your proposed contributions.

## License
This project is licensed under: MIT License.

## Tests
Currently, there are no tests implemented for this project. If you would like to contribute, please follow the [contributing guidelines](#contributing).

## Resources
The following resources were referenced to create this application:
* Webpack: [Babel-Loader](https://webpack.js.org/loaders/babel-loader/)
* Webpack: [Plugins](https://webpack.js.org/concepts/plugins/)
* MDN Web Docs: [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache)
* MDN Web Docs: [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
* MDN Web Docs: [IndexDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* Chrome Dev: [Workbox-Webpack-Plugin](https://developer.chrome.com/docs/workbox/reference/workbox-webpack-plugin/#type-GenerateSWConfig)
* npmjs: [Webpack-PWA-Manifest](https://www.npmjs.com/package/webpack-pwa-manifest)

## Questions
If you have any questions, please visit my GitHub profile [MCunha17](https://github.com/MCunha17) or contact me at cunha.maria.theresa@gmail.com.