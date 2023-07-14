import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_FAILURE, LOGIN_SUCCESS } from './uiActionTypes';
import { bindActionCreators } from 'redux';



const login = (email, password) => ({
    type : LOGIN,
    user: {
		email,
		password,
	},
});

const logout = () => ({
    type : LOGOUT,
});

const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});
const boundLogin = bindActionCreators(login, dispatch);
const boundLogout = bindActionCreators(logout, dispatch);
const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, dispatch);
const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, dispatch);

export const loginSuccess = () => ({
	type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
	type: LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
	return async (dispatch) => {
		dispatch(login(email, password));
		try {
			const response = await fetch('http://localhost:3000/login-success.json');
			const result = await response.json();
			dispatch(loginSuccess());
		} catch (error) {
			dispatch(loginFailure());
		}
	};
};


export {login, logout, hideNotificationDrawer, displayNotificationDrawer, boundLogin, boundLogout, boundDisplayNotificationDrawer, boundHideNotificationDrawer}; 