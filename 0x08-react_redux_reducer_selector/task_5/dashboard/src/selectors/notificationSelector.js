
// get the filter property from the state
export const filterTypeSelected = (data) => {
    return data.get('filter');
};

// the list of notifications in a Map format from the state
export  const getNotifications = (data) => {
    return data.get('notification')
};

// returns  unread notifications in a Map format from the state
export const getUnreadNotifications = (data) => {
    const notification = Object.values(getNotifications(data).toJS())
    return notification.filter((not) => {
        not.isRead
    })
}
