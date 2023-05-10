import { combineReducers } from "@reduxjs/toolkit";

/** reducers */
import product from "./product/product";

/** Main reducer function */
export default combineReducers({ product });

/** Export selectors and action functions */
