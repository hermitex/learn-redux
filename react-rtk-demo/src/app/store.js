import { configureStore } from "@reduxjs/toolkit";

// import { createLogger } from "redux-logger";

import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";

import userReducer from "../features/user/UserSlice";

// const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
