# Dataset-JSON React Demo

This repository shows how to setup react for Dataset-JSON as example.

## Description

The main purpose of this project is a demonstration.

## Contribution

Contribution is very welcome. When you contribute to this repository you are doing so under the below licenses. Please checkout [Contribution](CONTRIBUTING.md) for additional information. All contributions must adhere to the following [Code of Conduct](CODE_OF_CONDUCT.md).

## License

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg) ![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-blue.svg)

### Code & Scripts

This project is using the [MIT](http://www.opensource.org/licenses/MIT "The MIT License | Open Source Initiative") license (see [`LICENSE`](LICENSE)) for code and scripts.

### Content

The content files like documentation and minutes are released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). This does not include trademark permissions.

## Re-use

When you re-use the source, keep or copy the license information also in the source code files. When you re-use the source in proprietary software or distribute binaries (derived or underived), copy additionally the license text to a third-party-licenses file or similar.

When you want to re-use and refer to the content, please do so like the following:

> Content based on [Dataset-JSON React Demo (GitHub)](https://github.com/KatjaGlassConsulting/dataset-json-react-demo) used under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/) license.

## Using React

To use react you need to have the package manager NPM and node.js installed (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory - in the console, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Layout - Semantic-UI

There are various packages which come along with nice ready to use components for a phantastic layout. Next to matieral-ui which is well known, there is also semantic-ui.
I am using [semantic-ui](https://react.semantic-ui.com/). This needs a patch to work with the latest react-scripts version. Note that the package.json is updated with a required "postinstall".