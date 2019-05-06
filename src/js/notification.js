export const init = () => {
  // At first, let's check if we have permission for notification
  // If not, let's ask for it
  if (window.Notification && Notification.permission !== "granted") {
    Notification.requestPermission();
  }
};

const sendNotification = (message, tag) => {
  const notification = new Notification(message, {
    tag
  });

  return notification;
};

export const send = (message, tag) => {
  return new Promise((resolve, reject) => {
    // If the user agreed to get notified
    // Let's try to send ten notifications
    if (window.Notification && Notification.permission === "granted") {
      // Thanks to the tag, we should only see the "Hi! 9" notification
      resolve(sendNotification(message, tag));
    }

    // If the user hasn't told if he wants to be notified or not
    // Note: because of Chrome, we are not sure the permission property
    // is set, therefore it's unsafe to check for the "default" value.
    else if (window.Notification && Notification.permission !== "denied") {
      Notification.requestPermission(function(status) {
        // If the user said okay
        if (status === "granted") {
          resolve(sendNotification(message, tag));
        }

        // Otherwise, we can fallback to a regular modal alert
        else {
          reject();
        }
      });
    }

    // If the user refuses to get notified
    else {
      // We can fallback to a regular modal alert
      reject();
    }
  });
};
