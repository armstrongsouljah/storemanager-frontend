import { combineReducers, } from "redux";
import loginReducer from "./loginReducer";
import productListReducer from './productListReducer';

export default combineReducers({
    loginReducer,
    productListReducer,
});
