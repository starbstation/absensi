import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDYxemSw6lYB2Ukf2XtPksEauY-fslwaNg",
    authDomain: "starb-absensi.firebaseapp.com",
    databaseURL: "https://starb-absensi.firebaseio.com",
    projectId: "starb-absensi",
    storageBucket: "starb-absensi.appspot.com",
    messagingSenderId: "838548828336"
  });

export const db = app.database();
export const namesRef = db.ref('names');
