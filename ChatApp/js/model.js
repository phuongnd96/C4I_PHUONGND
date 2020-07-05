const model = {};
model.currentUser = undefined;
model.currentConversation = undefined;
model.register = async (firstName, lastName, email, pasword) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, pasword);
    await firebase.auth().currentUser.sendEmailVerification();
    firebase.auth().currentUser.updateProfile({
      displayName: firstName + " " + lastName,
    });
    alert("Register success, please check your email");
    view.setActiveScreen("loginScreen");
  } catch (error) {
    alert(error.message);
  }
};
model.login = async (email, password) => {
  try {
    let user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(user);
    if (user.user.emailVerified) {
      model.currentUser = {
        displayName: user.user.displayName,
        email: user.user.email,
      };
      view.setActiveScreen("chatScreen");
    } else {
      alert("Please verify your email");
    }
  } catch (error) {
    console.log(error.message);
  }
};

model.loadConversations = async () => {
  firebase
    .firestore()
    .collection("conversations")
    .get()
    .then((res) => {
      // Lấy phần từ đầu tiên
      const data = utils.getDataFromDocs(res.docs);
      if (data.length > 0) {
        model.currentConversation = data[0];
        view.showCurrentConversation();
      }
      console.log(data);
    });
};

model.addMessage = (msg) => {
  const conversationToUpdate = {
      messages:firebase.firestore.FieldValue.arrayUnion(msg)
  };
  firebase
    .firestore()
    .collection("conversations")
    .doc(model.currentConversation.id)
    .update(conversationToUpdate)
    .then((res) => {
      alert("updated");
    });
};
