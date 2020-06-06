import * as actionTypes from './actionTypes';
import {FIREBASE_API_KEY} from '../../constants';
import axios from 'axios';
import { app, facebookProvider } from '../../components/UserAuthentication/firebase'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        userId: userId
    };
};
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const authWithEmail = (email, password, SignIn) => {
    return (dispatch, getState) => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        const type = SignIn? 'signInWithPassword' : 'signUp';
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:${type}?key=${FIREBASE_API_KEY}`;

        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(email));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error.message));
            });
    };
};
export const authWithFacebook = () => {
    return dispatch => {
        dispatch(authStart());
        app.auth().signInWithPopup(facebookProvider)
        .then(result => {
            dispatch(authSuccess(result.additionalUserInfo.profile.email));
        })
        .catch(error => {
            dispatch(authFail(error.message));
        })
    }
  }