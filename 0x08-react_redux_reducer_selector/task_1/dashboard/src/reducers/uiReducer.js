import {
     LOGIN,
     LOGIN_FAILURE, 
     LOGIN_SUCCESS, 
     LOGOUT,
     DISPLAY_NOTIFICATION_DRAWER,
     HIDE_NOTIFICATION_DRAWER} from "../actions/uiActionTypes";
     
import { Map } from 'immutable';

const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });



const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set(isNotificationDrawerVisible, true);

        case HIDE_NOTIFICATION_DRAWER:
            return state.set(isNotificationDrawerVisible, false);

        case LOGIN:
            return state.set(isUserLoggedIn, true);

        case LOGIN_SUCCESS:
            return state.set(isUserLoggedIn, true);

        case LOGOUT:
            return state.set(isUserLoggedIn, false);
            
        case LOGIN_FAILURE:
            return state.set(isUserLoggedIn, false);
            
        default:
            break;
    }
    return state;
};
  
  export default initialState;