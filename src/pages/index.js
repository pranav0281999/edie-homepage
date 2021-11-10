import * as React from "react";
import FooterBar from "../components/footerBar";
import NavBar from "../components/navBar";
import "./index.module.css";
import Hero from "../components/indexPage/hero";
import ServiceList from "../components/indexPage/serviceList";
import DesignList from "../components/indexPage/designList";
import Team from "../components/indexPage/team";
import Review from "../components/indexPage/review";

const IndexPage = () => {
  return (
    <div>
      <NavBar/>
      <main>
        <Hero/>
        <ServiceList/>
        <DesignList/>
        <Team/>
        <Review/>
      </main>
      <FooterBar/>
    </div>
  )
}

export default IndexPage;
