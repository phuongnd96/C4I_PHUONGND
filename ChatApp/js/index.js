window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBeswhwhL39NmOtRiVIXzA_JVLlBJMrVJg",
    authDomain: "chat-app-d9871.firebaseapp.com",
    databaseURL: "https://chat-app-d9871.firebaseio.com",
    projectId: "chat-app-d9871",
    storageBucket: "chat-app-d9871.appspot.com",
    messagingSenderId: "794675399694",
    appId: "1:794675399694:web:04ad6a4cace9850098805f",
    measurementId: "G-88NS20C6KN",
  };
    try {
    (async()=>{
      // Initialize Firebase
    await  firebase.initializeApp(firebaseConfig);
      //xác nhận xem user đã login chưa
     await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          if(user.emailVerified){
            model.currentUser = user;
            view.setActiveScreen('chatScreen');
            return;
          }
          view.setActiveScreen("loginScreen");  
        }
        view.setActiveScreen("loginScreen");
      });
    })();
  } catch (e) {
    console.log(e);
  }
};
