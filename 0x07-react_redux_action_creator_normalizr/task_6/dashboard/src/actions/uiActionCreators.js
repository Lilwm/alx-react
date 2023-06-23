import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { bindActionCreator } from 'redux';

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
const boundLogin = bindActionCreator(login, dispatch);
const boundLogout = bindActionCreator(logout, dispatch);
const boundDisplayNotificationDrawer = bindActionCreator(displayNotificationDrawer, dispatch);
const boundHideNotificationDrawer = bindActionCreator(hideNotificationDrawer, dispatch);

export {login, logout, hideNotificationDrawer, displayNotificationDrawer, boundLogin, boundLogout, boundDisplayNotificationDrawer, boundHideNotificationDrawer}; 