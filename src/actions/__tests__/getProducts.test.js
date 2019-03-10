import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import types from "../actionTypes";
import getProducts from "../getProducts";

const middlewares = [thunk, ];
const mockStore = configureMockStore(middlewares);
const { BASE_URL, } = process.env;

describe("getProducts", () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it("dispatches the correct action on fetch products success", () => {
        const expectedAction = [{
            type: types.PRODUCTS_FETCH_SUCCESS,
            payload: {
                products: [],
            },

        },];
        fetchMock.getOnce(`${BASE_URL}/products`, {
            products: [],
            errors: "",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const store = mockStore();
        return store.dispatch(getProducts()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
    it("dispatches the correct action on fetch products success", () => {
        const expectedAction = [{
            type: types.PRODUCTS_FETCH_FAILURE,
            errors: "hello",

        },];
        fetchMock.getOnce(`${BASE_URL}/products`, {
            errors: "hello",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const store = mockStore();
        return store.dispatch(getProducts()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});
