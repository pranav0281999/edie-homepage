import * as React from "react";
import {
  divOuter,
  pHeading,
  divServiceList,
  divService,
  pServiceIcon,
  pServiceTitle,
  pServiceDescription,
  buttonGetStarted
} from "./serviceList.module.css";

const ServiceList = () => {
  return (
    <div className={divOuter} id={"services"}>
      <p className={pHeading}>We offer high demand services </p>
      <div className={divServiceList}>
        <div className={divService}>
          <p
            className={`material-icons ${pServiceIcon}`}
            style={{
              background: "#2D9CDB"
            }}
          >edit</p>
          <p className={pServiceTitle}>UI/UX Design</p>
          <p className={pServiceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
            nulla consequat
            aliquet id quis turpis.</p>
          <button className={buttonGetStarted}>Get Started</button>
        </div>
        <div className={divService}>
          <p
            className={`material-icons ${pServiceIcon}`}
            style={{
              background: "#27AE60"
            }}
          >code</p>
          <p className={pServiceTitle}>Front End</p>
          <p className={pServiceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
            nulla consequat
            aliquet id quis turpis.</p>
          <button className={buttonGetStarted}>Get Started</button>
        </div>
        <div className={divService}>
          <p
            className={`material-icons ${pServiceIcon}`}
            style={{
              background: "#EB5757"
            }}
          >storage</p>
          <p className={pServiceTitle}>Back End</p>
          <p className={pServiceDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac
            nulla consequat
            aliquet id quis turpis.</p>
          <button className={buttonGetStarted}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceList;
