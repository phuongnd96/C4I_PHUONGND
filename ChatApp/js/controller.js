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
  }
  if (registerInfo.confirmPassword === "") {
    view.showErrorMessage(
      "error-confirm-password-name",
      "Please input confirm password."
    );
  }
  view.setActiveScreen("loginScreen");
};
controller.validate = (info) => {
  view.clearErrorMessage([
    'error-email-name',
    'error-password-name'
  ]);
  if (info.email===""){
    view.showErrorMessage('error-email-name','Please input email...');
  }
  if (info.password===""){
    view.showErrorMessage('error-password-name','Please input password...');
  }
};
controller.authen=(info)=>{
console.log(info);
}
