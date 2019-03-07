import types from "../../actions/actionTypes";
import loginReducer from "../loginReducer";

const initialState = {
    userRole: null,
    token: null,
    successMessage: null,
    errors: null,
};

describe("loginReducer", () => {
    it("should return the correct state after login success", () => {
        const action = {
            type: types.LOGIN_SUCCESS,
            payload: {
                userRole: "attendant",
                token: "wewe123",
                successMessage: "logged in",
            },

        };

        const expectedState = {
            userRole: "attendant",
            token: "wewe123",
            successMessage: "logged in",
            errors: null,
        };
        expect(loginReducer(initialState, action)).toEqual(expectedState);
    });
    it("should return the correct state after login failure", () => {
        const action = {
            type: types.LOGIN_FAILURE,
            payload: {
                errors: "login failed",
            },

        };

        const expectedState = {
            userRole: null,
            token: null,
            successMessage: null,
            errors: "login failed",
        };
        expect(loginReducer(initialState, action)).toEqual(expectedState);
    });
    it("should return the correct state after un defined action type", () => {
        const action = {
            type: "undefined",
            payload: null,

        };

        const expectedState = {
            userRole: null,
            token: null,
            successMessage: null,
            errors: null,
        };
        expect(loginReducer(initialState, action)).toEqual(expectedState);
    });
});
