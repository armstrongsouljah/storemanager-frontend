import types from "../../actions/actionTypes";
import productListReducer from "../productListReducer";

const initialState = {
    products: null,
    errors: null,
}

describe("productListReducer", () => {
    it("should set the correct state on PRODUCT_LIST_FETCH success", () => {
       const action = {
           type: types.PRODUCTS_FETCH_SUCCESS,
           payload: {
               products: [{product_name:'hello'}],
               errors: null,
           }
       };
       const expectedState = {
           products: [{product_name:'hello'}],
           errors: null,
       }

       expect(productListReducer(initialState, action)).toEqual(expectedState);
    }); 
    it("should set the correct state on PRODUCT_LIST_FETCH failure", () => {
        const action = {
            type: types.PRODUCTS_FETCH_FAILURE,
            payload: {
                errors: "ererer",
            },
        };
        const expectedState = {
            products: null,
            errors: "ererer",
        }
 
        expect(productListReducer(initialState, action)).toEqual(expectedState);
     }); 

     it("should set the correct state on no action triggered", () => {
        const action = {
            type: "undefined",
        };
        const expectedState = {
            products: null,
            errors: null,
        }
 
        expect(productListReducer(initialState, action)).toEqual(expectedState);
     });

})