

import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../bookslice/bookSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export default store;