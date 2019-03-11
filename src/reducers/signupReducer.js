import types from "../actions/actionTypes";

const initialState = {
    success_message: null,
    errors:null,
}

const signupReducer = (state=initialState, action) => {
   switch(action.type){
       case types.SIGNUP_SUCCESS:
       return {
           ...state, success_message: action.payload.message, 
       }
       case types.SIGNUP_FAILURE:
       return {
           ...state, errors: action.payload.message,
       }
       default:
       return {...state}
   }
}

export default signupReducer;
