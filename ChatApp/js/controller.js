const controller = {};
controller.register = (registerInfo) => {
  view.clearErrorMessage([
    "error-first-name",
    "error-last-name",
    "error-email-name",
    "error-password-name",
    "error-confirm-password-name",
  ]);
  if (registerInfo.firstName === "") {
    view.showErrorMessage("error-first-name", "Please input first name.");
  }
  if (registerInfo.lastName === "") {
    view.showErrorMessage("error-last-name", "Please input last name.");
  }
  if (registerInfo.email === "") {
    view.showErrorMessage("error-email-name", "Please input email.");
  }
  if (registerInfo.password === "") {
    view.showErrorMessage("error-password-name", "Please input password.");
    return;
  }
  if (registerInfo.confirmPassword === "") {
    view.showErrorMessage(
      "error-confirm-password-name",
      "Please input confirm password."
    );
    return;
  }
  if (registerInfo.confirmPassword != registerInfo.password) {
    view.showErrorMessage("error-confirm-password-name", "Password not match.");
  }
  if(registerInfo.firstName!==""&&registerInfo.lastName!==""
  &&registerInfo.email!==""){
    model.register(registerInfo.firstName,registerInfo.lastName,registerInfo.email
      ,registerInfo.password);
  }
};
controller.validate = (info) => {
  view.clearErrorMessage(["error-email-name", "error-password-name"]);
  if (info.email === "") {
    view.showErrorMessage("error-email-name", "Please input email...");
  }
  if (info.password === "") {
    view.showErrorMessage("error-password-name", "Please input password...");
  }
  if (info.email!==""&&info.password!==""){
    model.login(info.email,info.password);
  }
};
controller.logOut=()=>{
  try {
    firebase.auth().signOut()
  } catch (error) {
    console.log(error);
  }
}
controller.addMessageToDataBase=(msg)=>{
  model.addMessage(msg);
};
controller.createConversation=({title,friendEmail})=>{
  view.clearErrorMessage(['conversation-name-error','conversation-email-error'])
if (title===''){
  view.showErrorMessage('conversation-name-error','Please input conversation title');
}
console.log(friendEmail)
if (friendEmail===''){
  view.showErrorMessage('conversation-email-error',`Please input ally's email`);
}
console.log(model.currentConversation)
model.createConversation({
  title
  ,users:[friendEmail,model.currentUser.email]
  ,createdAt:new Date().toISOString()
  ,messages:[]
})
}
