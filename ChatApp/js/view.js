const view = {};
view.setActiveScreen = (screenName) => {
  document.getElementById("app").innerHTML = components.welcomeScreen;
  switch (screenName) {
    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      const registerForm = document.getElementById("form-register");
      registerForm.addEventListener("submit", (e) => {
        //không thực hiện hành động mặc đinh, ở đây là load lại trang khi submit form
        e.preventDefault();
        const registerInfo = {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        console.log(registerInfo);
        controller.register(registerInfo);
      });
      break;

    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen;
      const loginForm = document.getElementById("form-login");
      console.log(loginForm);
      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginInfo = {
          email: loginForm.email.value,
          password: loginForm.password.value,
        };
        controller.validate(loginInfo);
        controller.authen(loginInfo);
      });
  }
};
view.clearErrorMessage = (ids) => {
  for (let i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).innerHTML = "";
  }
};
view.showErrorMessage = (id, message) => {
  document.getElementById(id).innerHTML = message;
  document.getElementById(
    id
  ).style = `font-size:12px; color:red;margin-top:3px`;
};
