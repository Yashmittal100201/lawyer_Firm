import { combineReducers } from "redux";
import changeTheValue from "./increment_decrement";

const rootReducer = combineReducers({
    changeTheValue,
});

export default rootReducer;