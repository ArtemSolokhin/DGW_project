import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import './Footer.css';
import counterpart  from "counterpart";
import Translate from "react-translate-component";
import en from "../languages/english";
import ua from "../languages/ukrainian";
counterpart.registerTranslations("en",en)
counterpart.registerTranslations("ua",ua)

const Footer = () => {
return(
<footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">DeliGOODwin</h1>

    <h2><Translate content="contact"/></h2>

    <address>
      <Translate content="address"/>
      <br />
    </address>
  </div>

  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title"><Translate content="legal"/></h2>

      <ul class="nav__ul">
        <li>
          <a href="#"><Translate content="privacy_policy"/></a>
        </li>

        <li>
          <a href="#"><Translate content="terms_to_use"/></a>
        </li>

        <li>
          <a href="#"><Translate content="sitemap"/></a>
        </li>
      </ul>
    </li>
  </ul>

  <div class="legal">
    <p>&copy; 2021 Something. All rights reserved.</p>

    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
    </div>
  </div>
</footer>
)
};

export default Footer;