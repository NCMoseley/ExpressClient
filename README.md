# Express Client with Typescript

Boilerplate for a React Application to use with ExpressPassport. This project supports account creation based on email & password combination. Credentials are stored in mongoDB via mongoose. The server creates Jwt tokens, and the client places them in localstorage in the browser to preserve logged in state for each user. There is a boilerplate feature route which is only available to users who have created an account and are logged in.

This boilerplate incorporates redux, redux-thunk and axios for request promise handling.

## Instructions

See the folder JavaScript Client in this repo for this project without Typescript. There is a small bug with redux-thunk and Typescript that is being worked on. [#169](https://github.com/reduxjs/redux-thunk/issues/169)

Either download the repo, or clone it into a local folder then:

```
yarn add
```

To start development server.

```
yarn start
```

To run with the corresponding server, see [ExpressPassport](https://github.com/NCMoseley/ExpressPassport).

## References

This project was bootstrapped with [Create React App TypeScript](https://github.com/wmonk/create-react-app-typescript).

Thanks to Stephen Grider for this tutorial:

https://www.udemy.com/react-redux-tutorial

#### Packages for similar projects

yarn add/npm i --save:

```
react-router-dom redux react-redux redux-form axios redux-thunk
```
