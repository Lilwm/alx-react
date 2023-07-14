// Import the notificationItem.json file and the normalize and schema modules from normalizr
import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';

// Define a users schema
const user = new schema.Entity('users');

// Define a message schema
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define a notification schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize the notifications.json data with the notification schema
const normalizedData = normalize(notificationItem.default, [notification]);

// Export a function to get all notifications for a user
export const getAllNotificationsByUser = (userId) => {

  // Get the notifications and messages entities from the normalized data
  const entityNotification = normalizedData.entities.notifications;
  const entityMessage = normalizedData.entities.messages;

  // Create an empty array to store the data
  const data = [];

  // Iterate over the notifications entities
  for (let item in entityNotification) {

    // Check if the notification author is the specified user
    if (entityNotification[item].author === userId) {

      // Get the context message for the notification
      const contextMessage = entityNotification[item].context;

      // Add the message entity to the data array
      data.push(entityMessage[contextMessage])
    }
  }

  // Return the data array
  return data;
};

// Export a function to normalize notification data
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]).entities
}
