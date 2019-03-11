import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import types from "../actionTypes";
import registerUser from "../signupAction";

const middlewares = [thunk,];
const mockStore = configureMockStore(middlewares);
const { BASE_URL, } = process.env;
const token = 'dedededed';

const sampleData = {
    username: "soultech23",
    password: "Samplepassword123",
    role: "admin",
};

describe('signupAction', () => {
    afterEach(() => {
     fetchMock.restore();
    });

    it('dispatches the correct type on signup success', () => {
        const expectedAction = [{
            type: types.SIGNUP_SUCCESS,
            payload: {
                message: "successfully registered",
            }
        }];

        fetchMock.postOnce(`${BASE_URL}/auth/signup`, {
            message: "successfully registered",
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
               Authorization: `Bearer ${token}`
            }
        })

        const store = mockStore();
        return store.dispatch(registerUser(sampleData)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
    it('dispatches the correct type on signup failure', () => {
        const expectedAction = [{
            type: types.SIGNUP_FAILURE,
            payload: {
                message: "invalid username",
            }
        }];

        fetchMock.postOnce(`${BASE_URL}/auth/signup`, {
            message: "invalid username",
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
               Authorization: `Bearer ${token}`
            }
        })

        const store = mockStore();
        return store.dispatch(registerUser(sampleData)).then(() => {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
});
