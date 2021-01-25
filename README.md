# Crypto App

Cryptocurrency finance price tracker app. This simple app use [CoinGecko](https://www.coingecko.com/) for providing a wide variety of data on many different crypto assets.

## Demo

![Demo](./public/demo.png)

---

## How to use

### Prerequisites

First, make sure you have `Node.js` (**npm** or **yarn**) installed.

```
$ node -v
v12.x.x
```

Also, you can use `nvm` as a helpful tool to install the correct **node** and **npm**/**yarn** version.

### Installing the application

```
$ git clone https://github.com/ilovric00/crypto-app.git <my-project-name>
$ cd <my-project-name>
$ yarn
```

_This command will install all of the latest dependencies. Installation might take some time._

### Running the application

```
$ yarn start
```

_Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser._

### Building the application

```
$ yarn build
```

_Builds the application for production usage._

---

## Built with

- [React](https://github.com/facebook/react/) as JavaScript library for building user interfaces
- [TypeScript](https://github.com/microsoft/TypeScript) as a language for application-scale JavaScript
- [Sass](https://github.com/sass/dart-sass) as CSS pre-processor

## Libraries

In addition several smaller libraries are used. Instructions on how to use them are linked below.

| Library                                               | Purpose                                                 |
| ----------------------------------------------------- | ------------------------------------------------------- |
| [Classnames](https://github.com/JedWatson/classnames) | for conditionally joining classNames together           |
| [ESLint](https://github.com/eslint/eslint)            | for making code more consistent and avoiding bugs       |
| [Stylelint](https://github.com/stylelint/stylelint)   | for avoiding errors and enforcing conventions in styles |
| [Prettier](https://github.com/prettier/prettier)      | for code formatting                                     |
| [Husky](https://github.com/typicode/husky)            | for preventing bad commit or push                       |

See `package.json` for a complete overview.

---

## Folder structure

```
src
├── components                                 # place for all reusable components
│   └── {ComponentName}                        # reusable component
│   │   ├── {ComponentName}.module.scss        # component styles
│   │   ├── {ComponentName}.tsx                # component
│   │   └── index.ts                           # for root component of a directory
├── styles                                     # place to store global styles
│   ├── globals                                # place for reset and base styling
│   ├── mixins                                 # place to store all mixins
│   ├── settings                               # place to store all fonts, colors, and breakpoints
│   ├── utils                                  # place to store all utility functions for styling
│   └── index.scss                             # styling entry point
└── types                                      # place to store all types
```

## Style Guide

As a "base" style guide, the [Airbnb's style guide](https://airbnb.io/javascript/react) is being used. Since we're applying different eslint configs that are combined with Airbnb's [config](https://yarnpkg.com/package/eslint-config-airbnb), large number of these rules are already enforced.

## Versioning

This project use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ilovric00/crypto-app/tags).

## Contributing

If you're interested in contributing to this project, please first discuss the change you wish to make via issue, email, or any other method with the owner of this repository before submitting a pull request.
