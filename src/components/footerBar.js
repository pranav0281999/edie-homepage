import * as React from "react";
import instagramImage from "../images/instagram.svg";
import linkedinImage from "../images/linkedin.svg";
import twitterImage from "../images/twitter.svg";
import {
  footerStyle,
  divFooterOuter,
  divFooterLinks,
  pNavLink,
  divFooterSocialMediaOuter,
  pFooterHeading,
  divFooterSocialMedia,
  imgFooterSocialMedia,
  divFooterSubscribe,
  pFooterSubscribe,
  divFooterSubscribeInput,
  inputSubscribe,
  buttonSubscribe,
  pFooter
} from "./footerBar.module.css";

const FooterBar = () => {
  return (
    <footer className={footerStyle}>
      <div className={divFooterOuter}>
        <div className={divFooterLinks}>
          <p className={pNavLink}>Home</p>
          <p className={pNavLink}>Services</p>
          <p className={pNavLink}>Our Works</p>
          <p className={pNavLink}>Clients</p>
          <p className={pNavLink}>Contact</p>
        </div>
        <div className={divFooterSocialMediaOuter}>
          <p className={pFooterHeading}>Edie</p>
          <div className={divFooterSocialMedia}>
            <img src={instagramImage} alt={"Social Media Logo"} className={imgFooterSocialMedia}/>
            <img src={linkedinImage} alt={"Social Media Logo"} className={imgFooterSocialMedia}/>
            <img src={twitterImage} alt={"Social Media Logo"} className={imgFooterSocialMedia}/>
          </div>
        </div>
        <div className={divFooterSubscribe} id={"contact"}>
          <p className={pFooterSubscribe}>Want us to contact you?</p>
          <div className={divFooterSubscribeInput}>
            <input type={"test"} placeholder={"Email"} className={inputSubscribe}/>
            <button className={buttonSubscribe}>Join</button>
          </div>
        </div>
      </div>
      <p className={pFooter}>created by&nbsp;
        <a
          href={"https://pranav0281999.github.io/"}
          target={"_blank"}
        >pranav0281999</a>
        &nbsp;- devChallenges.io
      </p>
    </footer>
  )
}

export default FooterBar;
