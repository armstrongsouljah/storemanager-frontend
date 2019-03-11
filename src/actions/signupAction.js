import types from "./actionTypes";

const { BASE_URL } = process.env;
const token = localStorage.getItem("token")
const registerUser = payload => dispatch => fetch(`${BASE_URL}/auth/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
}).then(response => response.json())
.then(data => {
    if(data.message.includes('registered')){
        dispatch({
            type: types.SIGNUP_SUCCESS,
            payload: {
                message: data.message,
            }
        })
    } else {
        dispatch({
            type: types.SIGNUP_FAILURE,
            payload: {
                message: data.message,
            }
        })
    }
})

export default registerUser;
