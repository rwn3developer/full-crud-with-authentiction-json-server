import { combineReducers } from "redux";
import userReducer from "./userReducere";

const rootReduceres = combineReducers({
    user : userReducer
})

export default rootReduceres;