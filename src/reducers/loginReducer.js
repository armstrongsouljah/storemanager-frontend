import types from "../actions/actionTypes";

const initialState = {
    userRole: null,
    token: null,
    successMessage: null,
    errors: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
    case types.LOGIN_SUCCESS:
        return {
            ...state,
            userRole: action.payload.userRole,
            token: action.payload.token,
            successMessage: action.payload.successMessage,
        };
    case types.LOGIN_FAILURE:
        return { ...state, errors: action.payload.errors, };
    default:
        return { ...state, };
    }
};

export default loginReducer;
