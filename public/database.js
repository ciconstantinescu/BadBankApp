const firebaseConfig = {
    apiKey: "AIzaSyCSXRKF4mmypNtQa3H8RAsc55067lvhvwE",
    authDomain: "capstone-ae2f7.firebaseapp.com",
    projectId: "capstone-ae2f7",
    storageBucket: "capstone-ae2f7.appspot.com",
    messagingSenderId: "776065115406",
    appId: "1:776065115406:web:0b30871af16ac1da66a35f"
};

try {
    firebase.initializeApp(firebaseConfig);
    console.log('It works!');
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('It does not work', err.stack);
    }
  }
  
  // const fire = firebase;