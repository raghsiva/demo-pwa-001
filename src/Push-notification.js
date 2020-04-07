import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "your messagingSenderId"
  });

  navigator.serviceWorker
    .register('/serviceWorker.js')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('user token:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
}