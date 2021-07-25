import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@popperjs/core/dist/umd/popper.min.js"
import "@fontsource/archivo/400.css"
import "@fontsource/archivo/900.css"

// import React from "react"
// import { Provider } from "react-redux"
// import { applyMiddleware, compose, createStore } from "redux"
// import thunk from "redux-thunk"
// import rootReducer from "./src/state/createStore"

// const loadDevTools = () =>
//   process.env.NODE_ENV === "development" && window.devToolsExtension
//     ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//     : f => f

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(thunk), loadDevTools())
// )

// const replaceRouterComponent = () => {
//   const ConnectedRouterWrapper = ({ children }) => (
//     <Provider store={store}>
//        {children} 
//     </Provider>
//   )

//   return ConnectedRouterWrapper
// }

// export default replaceRouterComponent

export { default as wrapRootElement } from './src/state/ReduxWrapper';