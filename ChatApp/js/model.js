const model = {};
model.currentUser = undefined;
model.currentConversation = undefined;
model.collectionName = "conversations";
model.conversations=undefined;
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
      // Lấy phần tử đầu tiên
      const data = utils.getDataFromDocs(res.docs);
      model.conversations=data;
      if (data.length > 0) {
        model.currentConversation = data[0];
        view.showCurrentConversation();
      }
      view.showConversations();
      // console.log(data);
    });
};

model.addMessage = (msg) => {
  const conversationToUpdate = {
    messages: firebase.firestore.FieldValue.arrayUnion(msg),
  };
  firebase
    .firestore()
    .collection("conversations")
    .doc(model.currentConversation.id)
    .update(conversationToUpdate)
    .then((res) => {
      console.log("updated");
    })
    .catch((error) => {
      console.log(error);
    });
};

model.listenConversationsChange = () => {
  let isFirstRun = false;
  firebase
    .firestore()
    .collection(model.collectionName)
    .where("users", "array-contains", model.currentUser.email)
    .onSnapshot((res) => {
      if (!isFirstRun) {
        isFirstRun = true;
        return;
      }
      const docChanges = res.docChanges();
      console.log(docChanges);
      for (oneChange of docChanges) {
        const type = oneChange.type;
        const oneChangeData = utils.getDataFromDoc(oneChange.doc);
        console.log(oneChangeData);
        if (type==='modified'){
          if (oneChangeData.id === model.currentConversation.id) {
            model.currentConversation=oneChangeData
            view.addMessage(oneChangeData.messages[oneChangeData.messages.length-1])
          }
        }
        //Sau khi thêm mới message, update dữ liệu của model.conversations cho giống với dữ liệu trên firbase
        for (let i=0;i<model.conversations.length;i++){
          const element=model.conversations[i];
          if (element.id===oneChangeData.id){
            model.conversations[i]=oneChangeData;
          }
        }
        console.log(model.conversations)
      }
    });
};
