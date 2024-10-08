import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div class="login-container">
        <div class="login-form">
          <h2>Login</h2>
          <form id="loginForm" onsubmit="return validateForm(event)">
            <div class="input-group">
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required
              ></input>
              <small class="error-msg" id="usernameError"></small>
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              ></input>
              <small class="error-msg" id="passwordError"></small>
            </div>
            <button type="submit" class="login-btn">
              Sign In
            </button>
            <p class="sign-up-text">
              Don't have an account? <a href="main.html">Sign up here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
