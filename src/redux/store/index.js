import { configureStore } from "@reduxjs/toolkit";
import tempReducer from "../reducers/tempReducer";

const store = configureStore({
  reducer: tempReducer,
});

export default store;
