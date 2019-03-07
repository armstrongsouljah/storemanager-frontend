import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import loginAction from "../loginAction";
import types from "../actionTypes";

const middlewares = [thunk,];
const mockStore = configureMockStore(middlewares);
const { BASE_URL, } = process.env;
const sampleData = {
    username: "soultech23",
    password: "Samplepassword123",
};

describe("loginAction", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("dispatches LOGIN_SUCCESS on login", () => {
        const expectedAction = [{
            type: types.LOGIN_SUCCESS,
            payload: {
                token: "swsw",
                userRole: "adad",
                successMessage: "sucesss",

            },
        },];
        fetchMock.postOnce(`${BASE_URL}/auth/login`, {
            token: "swsw",
            user_role: "adad",
            message: "sucesss",
            mode: "cors",
            headers: { "Content-Type": "application/json", },
            status: 200,
        });
        const store = mockStore();
        return store.dispatch(loginAction(sampleData)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it("dispatches LOGIN_FAILURE on login failure", () => {
        const expectedAction = [{
            type: types.LOGIN_FAILURE,
            payload: {
                errors: "all failed",

            },
        },];
        fetchMock.postOnce(`${BASE_URL}/auth/login`, {
            message: "all failed",
            mode: "cors",
            headers: { "Content-Type": "application/json", },
            status: 401,
        });
        const store = mockStore();
        return store.dispatch(loginAction(sampleData)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
