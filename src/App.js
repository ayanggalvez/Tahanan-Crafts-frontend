import React from 'react';
import './App.css';
import { ReactComponent as Logo } from './Logo.svg';

function App() {
  return (
    <div className="App">
      {/* Background */}
      <div className="App-background-overlay" />

      {/* Left-side Login Rectangle */}
      <div className="login-rectangle">
        <div className="logo-wrapper">
          <Logo className="logo-svg" />
        </div>

        <div className="form-wrapper">
          <input
            type="text"
            className="login-input"
            placeholder="Email or phone number"
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
          />
          <div className="forgot-password">
            <a href>Forgot Password?</a>
          </div>
          <div className="login-button-wrapper">
          <button className="login-button">LOGIN</button>
          </div>
          <div className="divider">
            <span>OR</span>
          </div>
          <div className="social-buttons">
            <button className="social-button facebook">
              <img src="/Facebook.png" alt="Facebook" className="social-icon" />
              Sign in with Facebook
            </button>
            <button className="social-button google">
              <img src="/Google.png" alt="Google" className="social-icon" />
              Sign in with Google
            </button>
          </div>
            <div className="signup-prompt">
            <span>Don't have an account? </span>
            <a href>SIGN UP</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
