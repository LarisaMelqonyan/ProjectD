import React, { Component } from "react";
import "./Pricing.css";

class Pricing extends Component {
  render() {
    return (
      <div className="mainDiv">
        <h1 className="title">Pricing Plans</h1>
        <div className="filds">
          <div className="free">
            <h2 className="h2">Free</h2>
            <text className="divText">
              Ideal for discovering Coggle and occasional use.
            </text>
            <br />
            <text className="element1">$</text>
            <text className="freeElement2">0</text>
            <text className="element3"> forever</text>
            <a
              href="/login"
              className="button"
              data-l10n-id="plans-free-getstarted"
            >
              Get Started
            </a>
          </div>
          <div className="awesome">
            <h2 className="h2">Awesome</h2>
            <text className="divText">
              Ideal for personal or professional use, with privacy and advanced
              features.
            </text>
            <br />
            <text className="element1">$</text>
            <text className="element2">5</text>
            <text className="element3">per month</text>
            <a href="/awesome" class="button">
              Find out more
            </a>
          </div>
          <div className="organization">
            <h2 className="h2">Organization</h2>
            <text className="divText">
              Ideal for teams that want to control access to their data and
              consolidate billing.
            </text>
            <br />
            <text className="element1">$</text>
            <text className="element2">8</text>
            <text className="element3">per member per month</text>
            <a
              href="/login"
              className="button"
              data-l10n-id="plans-free-getstarted"
            >
              Find out more
            </a>
          </div>
        </div>
        <div className="feature1">
          <text>
            <b>3 private diagrams</b>
            <br />
            <b>Unlimited</b> public diagrams<br />
            Over <b>1600</b>{" "}
            <a href="http://bloggle.coggle.it/post/147537221917/introducing-emoji-in-coggle-to-celebrate">
              beautiful icons
            </a>
            <br />
            <b>Unlimited</b> image uploads
            <b>Auto-arrange branches</b>
            <br />
            <b>Full</b> change history<br />
            <b>PDF & Image</b> download<br />
            Unconnected <b>text boxes</b>
            <br />
            Export as <b> .mm and text</b>
            <br />
            Import <b>.mm and text</b>
            <br />
            <b>Shared folders</b>
            <br />
            Embeddable diagrams
          </text>
          <br />
        </div>
        <div className="feature2">
          Everything in <b className="teaxtFree"> Free </b> <br />
          + <br />
          <b>Unlimited</b> private diagrams<br />
          <b>Full</b> chat history<br />
          <b>Join Branches</b>
          <br />
          <b>High-res image</b> uploads<br />
          <b>Multiple start points</b>
          <br />
          <b>Control line style</b>
          <br />
          Collaborate by <b>link</b>
          <br />
        </div>

        <div className="feature3">
          Everything from <b className="textAwesome"> Awesome </b> <br />
          + <br />
          SAML Single Sign On<br />
          Separate Personal workspace<br />
          Consolidated billing
          <br />
          <b>Bulk export</b> <br />
          <b>User & data</b> management
          <br />
          Branded diagrams
        </div>

        <div className="pricingfooter">
          <div className="first">
            <b><h3>Coggle for Enterprise</h3></b>
            Does your company want to use Coggle but needs to manage <br />
            security and authentication in-house?{" "}
            <a href="mailto:enterprise@coggle.it">Get in touch with us</a>{" "}
            <br /> to discuss our support for enterprise customers and to find
            out <br />
            more about what we offer.
          </div>
          <div className="second">
            <b><h3>Features include:</h3></b>

            <ul>
              <li>On-premise instances for use behind your firewall</li>
              <li>Active Directory authentication</li>
              <li>Site licenses</li>
              <li>Enterprise level support</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;
