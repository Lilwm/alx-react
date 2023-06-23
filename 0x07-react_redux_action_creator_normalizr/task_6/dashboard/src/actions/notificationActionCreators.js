import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { bindActionCreator } from 'redux';
const markAsAread = (index) => ({
    type: MARK_AS_READ,
    index,
});
const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter,
});

const boundMarkAsAread = bindActionCreator(markAsAread, dispatch);
const boundSetNotificationFilter = bindActionCreator(setNotificationFilter, dispatch);

export { markAsAread, setNotificationFilter, boundMarkAsAread, boundSetNotificationFilter};