//dùng để lưu HTML, tùy trường hợp sẽ render vào app
const components = {};
components.welcomeScreen = `
<div>Welcome to chatApp</div>
`;
components.registerScreen = `
<div class="container">
        <div class="register-container">
          <div class="register-form">
            <div class="title">MindX chat</div>
            <form id="form-register">
              <div class="name-wrapper">
                <div class="input-wrapper">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                  />
                  <div id="error-first-name"></div>
                </div>
                <div class="input-wrapper">
                  <input type="text" name="lastName" placeholder="Last name" />
                  <div id="error-last-name"></div>
                </div>
              </div>
              <div class="input-wrapper">
                <input type="text" name="email" placeholder="Email..." />
                <div id="error-email-name"></div>
              </div>
              <div class="input-wrapper">
                <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                />
                <div id="error-password-name"></div>
              </div>
              <div class="input-wrapper">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password..."
                />
                <div id="error-confirm-password-name"></div>
              </div>
              <div class="submit-wrapper">
                  <div>Already have an account? <span class="cursor-pointer" id='redirect-to-login'>Login</span></div>
                  <button class="btn" type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
`;
components.loginScreen = `<div class="container">
<div class="login-container">
  <div class="login-form">
    <div class="title">MindX chat</div>
    <div class="form-wrapper">
    <form id="form-login" >
    <div class="input-wrapper">
    <input name="email" type="text" placeholder="Email">
    <div id="error-email-name"></div>
    </div>
    <div class="input-wrapper">
    <input name="password" type="password" placeholder="Password">
    <div id="error-password-name"></div>
    </div>
    <div class="submit-wrapper">
    <div>Don't have an account? <span class="cursor-pointer" id='redirect-to-register'>Register</span></div>
    <button class="btn" type="submit">Login</button>
    </form>
</div>
  </div>

</div>
</div>
</div>`;

components.chatScreen = `
<div class="header">
    MindX chat
  </div>
  <div class="chat-container">
  <div class="aside-left">
  <div class='new-conversation'><button class='btn' id='add-new-conversation' type='button'>+ New Conversation</button></div>
  <div class="list-conversations">
  </div>
  </div>
  <div class="main">
    <div class="conversation-detail">
      <div class="conversation-title">
        First conversation
      </div>
      <div class="list-message">
        
      </div>
      <form id="sendMessageForm">
        <input class="input" type="text" name="message">
        <button class="btn"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
      </form>
    </div>
  </div>
  <div class="aside-right">
      <div class="conversation-detail">
        
      </div>
  </div>
  </div>
`;
components.createConversationScreen=`
<div class="create-conversation-wrapper">
<div class="header">Mind chat</div>
<div class="main">
<h3 >Create a new converation</h3>
<form id="create-conversation-form">
<div  class="input-wrapper">
<input type="text" name="title" placeholder="Conversation name">
<div class="error" id="conversation-name-error"></div>
</div>
<div class="input-wrapper">
<input type="text" name="email" placeholder="Friend email">
<div class="error" id="conversation-email-error"></div>
</div>
<div class="button-wrapper">
<button class="btn" type="submit">
Save
</button>
<button id="back-to-chat">
Cancel
</button>
</div>
</form>
</div>
</div>`