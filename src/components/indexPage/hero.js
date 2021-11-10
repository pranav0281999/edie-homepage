import * as React from "react";
import heroImage from "../../images/heroImage.jpg";
import {
  divHero,
  divHeading,
  pBlue,
  pHeading,
  imgHero,
  divContent,
  pContent,
  divInput,
  pInput,
  divInputInner,
  inputStyle,
  buttonInput
} from "./hero.module.css";

const Hero = () => {
  return (
    <div className={divHero}>
      <div className={divHeading}>
        <p className={pBlue}>Unhappy with your website?</p>
        <p className={pHeading}>We create beautiful and fast web services</p>
      </div>
      <img src={heroImage} alt={"Hero"} className={imgHero}/>
      <div className={divContent}>
        <p className={pHeading}>Story, emotion and purpose</p>
        <p className={pContent}>We help transform your ideas into real world applications that will outperform your
          toughest
          competition
          and help you achieve your strategic goals in short period of time.</p>
        <div className={divInput}>
          <p className={pInput}>Want us to contact you?</p>
          <div className={divInputInner}>
            <input type={"text"} placeholder={"Email"} className={inputStyle}/>
            <button className={buttonInput}>Join</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
