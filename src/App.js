import React, { Component } from "react";
import menu from "./menu";
import "./App.css";
import Pricing from "./pages/Pricing";

class App extends Component {
  render() {
    return (
      <div className="App main fullpage">
        {/*  menu */}

        <div className="nav-bar">
          <a href="/" data-l10n-id="index-nav-home" className="nav-item">
            Home
          </a>
          <a href="/login" data-l10n-id="index-nav-login" className="nav-item">
            Login
          </a>
          <a
            href="#pricing"
            data-l10n-id="index-nav-pricing"
            className="nav-item"
          >

          </a>
          <a
            href="#features"
            data-l10n-id="index-nav-features"
            className="nav-item"
          >
            Features
          </a>
          <a
            href="/gallery"
            data-l10n-id="index-nav-gallery"
            className="nav-item"
          >
            Gallery
          </a>
        </div>

        <div className="middle">
          <div className="section">
            <img
              src="https://static.coggle.it/img/coggle-2x-white.png?_v=1530374966"
              alt="Coggle logo"
              className="logo"
            />
            <div data-l10n-id="index-tagline" className="tagline light">
              The clear way to share complex information.
            </div>
            <div className="video">
              <iframe
                width="448"
                height="252"
                src="https://www.youtube-nocookie.com/embed/iL40u0uNYa8?showinfo=0"
                frameBorder="0"
                allowFullScreen=""
              />
            </div>
            <div className="login-button-container">
              <a
                href="/login?redirectTo=%2fwelcome"
                className="login button outline"
              >
                <div
                  data-l10n-id="index-signupnow"
                  className="signup-button-content"
                >
                  Sign Up Now
                </div>
              </a>
            </div>
            <p>
              <a href="/login?redirectTo=%2f" data-l10n-id="index-login">
                Already signed up? Log in here.
              </a>
            </p>
          </div>
        </div>
<Pricing />
      </div>

    );
  }
}

export default App;
