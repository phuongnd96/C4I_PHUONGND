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
    (async () => {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      // xác nhận xem user đã login chưa
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // console.log(user);
          if (user.emailVerified) {
            model.currentUser = user;
            view.setActiveScreen("chatScreen");
            return;
          }
          view.setActiveScreen("loginScreen");
        }
        view.setActiveScreen("loginScreen");
      });
      // templateQueryDatabase();
    })();
  } catch (e) {
    console.log(e);
  }
};

// templateQueryDatabase = () => {
//   // ID của bản ghi
//   const docID = "tQ8pviMyzgo6vd0fLG50";
//   // get one
//   // firebase.firestore().collection('users').doc(docID).get().then((res)=>{
//   //   console.log(getDataFromDoc(res))
//   //   console.log(res.data())
//   //   console.log(res)
//   // })
//   // get many
//   firebase
//     .firestore()
//     .collection("users")
//     .where('name','==','phuong')
//     .get()
//     .then((res) => {
//       // Lấy phần từ đầu tiên
//       console.log(getDataFromDocs(res.docs));
//     });

//   // create
//     const dataToCreate={
//       name:'Create User',
//       age:25,
//       email:'nguyenduyphuong_t59@hus.edu.vn',
//       phoneNumber:['1923013901']
//     }
//     // firebase.firestore().collection('users').add(dataToCreate).then((res)=>{
//     //   alert('Added')
//     // })
//   // update
//     const  docIdUpdate='vHrBETeNQY0wzfKUBSeL';
//     const dataToUpdate={
//       age:21,
//       address:'NAMC',
//       phones:firebase.firestore.FieldValue.arrayUnion('1231123123)
//     }
//     // Ghi thêm vào bản ghi đã có sẵn chứ không ghi đè với các thuộc tính đã có sẵn
//     // firebase.firestore().collection('users').doc(docIdUpdate).update(dataToUpdate).then((res)=>{
//     //   alert('updated');
//     // })
//   // delete
//   const docIdToDelete='Kg2Qd7qX8g18SxmyQXsX';
//   firebase.firestore().collection('users').doc(docIdToDelete).delete().then((res)=>{
//     alert('deteled')
//   })

// };
