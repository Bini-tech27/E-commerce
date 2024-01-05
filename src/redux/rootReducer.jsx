import { combineReducers } from "redux";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  productReducer: productReducer,
});

export default rootReducer;
