import createSagaMiddleware from "@redux-saga/core"
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
// import { configureStore } from "redux";

// export const api = createAPI();

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: api,
  //     },
  //   }).concat(redirect),


