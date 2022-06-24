import { combineReducers } from "redux";
import home from "./Home/home.reducers";

const allReducers: any = combineReducers({
  home,
});

export default allReducers;
