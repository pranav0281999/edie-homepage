import React from 'react';
import {
  divOuter,
  divDescription,
  divImages,
  pOrange,
  pHeading,
  pContent,
  imgTeammate,
  imgTeammate3,
  imgTeammate2,
  imgTeammate1
} from "./team.module.css";
import teammateImage1 from "../../images/person3.png";
import teammateImage2 from "../../images/person1.png";
import teammateImage3 from "../../images/person2.png";

function Team(props) {
  return (
    <div className={divOuter}>
      <div className={divDescription}>
        <p className={pOrange}>Meet the team</p>
        <p className={pHeading}>We are chilled and a laidback team</p>
        <p className={pContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className={divImages}>
        <img src={teammateImage1} alt={"Team Member"} className={`${imgTeammate1} ${imgTeammate}`}/>
        <img src={teammateImage2} alt={"Team Member"} className={`${imgTeammate2} ${imgTeammate}`}/>
        <img src={teammateImage3} alt={"Team Member"} className={`${imgTeammate3} ${imgTeammate}`}/>
      </div>
    </div>
  );
}

export default Team;
