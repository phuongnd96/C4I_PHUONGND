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

components.chatScreen=`
<div id="welcome-user"></div>
<button id="logout-btn">Log out</button>
`