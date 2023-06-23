import {normalize,schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
   {},
   {idAttribute: 'guid'});
const normalized = normalize(notificationsData.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
    const notifications = [];
    for (const notification of normalized.entities.notifications) {
        if (notification.author.id === userId) {
            notifications.push(notification.context);
        }
    }
    return notifications;
  };

export { normalized };