import React, { Component } from "react";
import "./../App.css";

class Pricing extends Component {
  render() {
    return (
      <section className="frontContent">
        <a href="/gallery" class="screenshot" />
        <div class="intro-content">
          <h1 data-l10n-id="index-unleash" class="light doublespaced">
            Unleash your creativity
          </h1>
          <p data-l10n-id="index-blurb">
            Produce beautiful notes quickly and easily. Share them with friends
            and colleagues to work on your ideas together.
          </p>
          <a
            href="/login?redirectTo=%2fwelcome"
            data-l10n-id="index-signupnow"
            class="login button"
          >
            Sign Up Now
          </a>
          <p data-l10n-id="index-viewgallery">
            Or take a look at the <a href="/gallery">Coggle Gallery</a> for
            inspiration.
          </p>
        </div>
      </section>
    );
  }
}

export default Pricing;
