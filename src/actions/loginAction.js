import types from "./actionTypes";

const { BASE_URL, } = process.env;


const loginAction = payload => dispatch => fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
        "Content-Type": "application/json",
    },
}).then(response => response.json())
    .then((data) => {
        if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("userRole", data.user_role);
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: {
                    token: data.token,
                    successMessage: data.message,
                    userRole: data.user_role,
                },
            });
        } else {
            localStorage.setItem("token", null);
            localStorage.setItem("userRole", null);
            dispatch({
                type: types.LOGIN_FAILURE,
                payload: {
                    errors: data.message,
                },
            });
        }
    });

export default loginAction;
