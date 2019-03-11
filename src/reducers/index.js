import { combineReducers, } from "redux";
import loginReducer from "./loginReducer";
import productListReducer from './productListReducer';
import signupReducer from './signupReducer';

export default combineReducers({
    loginReducer,
    productListReducer,
    signupReducer,
});
