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
        const now = new Date();
        const message = {
          owner: model.currentUser.email,
          content: sendMessageForm.message.value,
          createdAt: now.toISOString(),
        };
        const messageFromBot = {
          owner: "Bot",
          content: sendMessageForm.message.value,
        };
        if (sendMessageForm.message.value.trim() !== "") {
          model.addMessage(message);
        }
        sendMessageForm.message.value = "";
      });
      const addConversationBtn = document.getElementById('add-new-conversation');
      addConversationBtn.addEventListener('click', () => {
        view.setActiveScreen('createConversationScreen');
      })
      model.loadConversations();

      
      model.listenConversationsChange();
      break;
    case "createConversationScreen":
      // console.log('1')
      document.getElementById("app").innerHTML = components.createConversationScreen;
      document.getElementById('back-to-chat').addEventListener('click', () => {
        view.backToChatScreen();
      });
      const createConversationForm=document.querySelector('#create-conversation-form');
      createConversationForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        const data={
          title:createConversationForm.title.value,
          friendEmail:createConversationForm.email.value
        }
        console.log(data)
        controller.createConversation(data);
      })

      break;
  }
};
view.backToChatScreen=()=>{
  document.getElementById("app").innerHTML = components.chatScreen;
  const sendMessageForm = document.querySelector("#sendMessageForm");
  sendMessageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // message chính là name đặt cho thẻ input
    const now = new Date();
    const message = {
      owner: model.currentUser.email,
      content: sendMessageForm.message.value,
      createdAt: now.toISOString(),
    };
    const messageFromBot = {
      owner: "Bot",
      content: sendMessageForm.message.value,
    };
    if (sendMessageForm.message.value.trim() !== "") {
      model.addMessage(message);
    }
    sendMessageForm.message.value = "";
  });
  const addConversationBtn = document.getElementById('add-new-conversation');
  addConversationBtn.addEventListener('click', () => {
    view.setActiveScreen('createConversationScreen');
  })
  view.showConversations();
  view.showCurrentConversation();
}
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
  const listMessage = document.querySelector(".list-message");
  listMessage.appendChild(messageWrapper);
  listMessage.scrollTop = listMessage.scrollHeight;
};
view.showCurrentConversation = () => {
  const chatTitle=document.querySelector('#app > div.chat-container > div.main > div > div.conversation-title');
  chatTitle.innerHTML=model.currentConversation.title;
  const conversationDetail=document.querySelector('.aside-right .conversation-detail');
  console.log(conversationDetail)
  let users=model.currentConversation.users.join().replace(/,/,"<br>")
  conversationDetail.innerHTML=users;
  document.querySelector('.list-message').innerHTML = "";
  for (let oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage);
  }
};
view.showConversations = () => {
  for (oneConversation of model.conversations) {
    view.addConversation(oneConversation);
  }
};
view.addConversation = (conversation) => {
  const conversationWrapper = document.createElement("div");
  conversationWrapper.classList.add("conversation");
  if (conversation.id === model.currentConversation.id) {
    conversationWrapper.classList.add("current");
  }
  conversationWrapper.innerHTML = `
  <div class="conversation-title">
${conversation.title}
</div>
<div class="conversation-num-users">${conversation.users.length} users</div>
  `;
  conversationWrapper.addEventListener('click', () => {
    document.querySelector('.current').classList.remove('current');
    conversationWrapper.classList.add('current');
    
    // console.log('1')
    model.changeCurrentConversation(conversation.id);
    
  })
  document
    .querySelector(".list-conversations")
    .appendChild(conversationWrapper);
};
