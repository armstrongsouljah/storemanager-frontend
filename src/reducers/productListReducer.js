/* eslint-disable default-case */
import types from "../actions/actionTypes";

const initialState = {
    products: null,
    errors: null,
};

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.PRODUCTS_FETCH_SUCCESS:
        return {
            ...state, products: action.payload.products,
        };
    case types.PRODUCTS_FETCH_FAILURE:
        return {
            ...state, errors: action.payload.errors,
        };
    default:
        return { ...state, };
    }
};

export default productListReducer;
