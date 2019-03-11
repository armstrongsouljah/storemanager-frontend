import React from 'react';
import types from '../../actions/actionTypes';
import signupReducer from '../signupReducer';

const initialState = {
    success_message: null,
    errors:null,
}

describe('signupReducer', () => {
    it('returns the correct state on signup success', () => {
       const action = {
           type: types.SIGNUP_SUCCESS,
           payload: {
               message: 'successfully registered'
           }
       }
       const expectedState = {
           success_message: 'successfully registered',
           errors: null
       }
       expect(signupReducer(initialState, action)).toEqual(expectedState)
    });
    it('returns the correct state on signup failure', () => {
        const action = {
            type: types.SIGNUP_FAILURE,
            payload: {
                message: 'username invalid'
            }
        }
        const expectedState = {
            success_message: null,
            errors: 'username invalid'
        }
        expect(signupReducer(initialState, action)).toEqual(expectedState)
     });
     it('returns the correct state on signup failure', () => {
        const action = {
            type: 'unidefined'
        }
        
        expect(signupReducer(initialState, action)).toEqual(initialState)
     });
});
