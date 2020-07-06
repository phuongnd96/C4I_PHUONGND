const view = {};
view.setActiveScreen = (screenName) => {
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
        controller.register(registerInfo);
      });
      const redirectToLogin = document.getElementById("redirect-to-login");
      redirectToLogin.addEventListener("click", (e) => {
        view.setActiveScreen("loginScreen");
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
      });
      document
        .getElementById("redirect-to-register")
        .addEventListener("click", (e) => {
          view.setActiveScreen("registerScreen");
        });
      break;

    case "chatScreen":
      document.getElementById("app").innerHTML = components.chatScreen;
      const sendMessageForm = document.querySelector("#sendMessageForm");
      sendMessageForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // message chính là name đặt cho thẻ input
        const now=new Date();
        const message = {
          owner: model.currentUser.email,
          content: sendMessageForm.message.value,
          createdAt:now.toISOString()
        };
        const messageFromBot = {
          owner: "Bot",
          content: sendMessageForm.message.value,
        };
        if (sendMessageForm.message.value.trim() !== "") {
          // console.log(message)
          // thêm tin nhắn trên màn hình
          // view.addMessage(message);
          model.addMessage(message);
          // thêm vào database
          // controller.addMessageToDataBase(message);
        }
        sendMessageForm.message.value = "";
      });
      model.loadConversations();
      model.listenConversationsChange();
      break;
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
view.addMessage = (message) => {
  const messageWrapper = document.createElement("div");
  messageWrapper.classList.add("message");
  if (model.currentUser.email === message.owner) {
    messageWrapper.classList.add("mine");
    messageWrapper.innerHTML = `<div class="content"> ${message.content} </div>`;
  } else {
    messageWrapper.classList.add("their");
    messageWrapper.innerHTML = `
  <div>${message.owner}</div>
  <div class="content"> ${message.content} </div>`;
  }
  // document.querySelector('.list-message').appendChild(messageWrapper);
  const listMessage = document.querySelector(".list-message");
  listMessage.appendChild(messageWrapper);
  listMessage.scrollTop = listMessage.scrollHeight;
};
view.showCurrentConversation = () => {
  for (let oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage);
  }
};
