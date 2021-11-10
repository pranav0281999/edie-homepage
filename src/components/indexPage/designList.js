import * as React from "react";
import {
  divOuter,
  divDesigns,
  divDesign,
  imgDesign,
  pDesignCategory,
  pBlue,
  pHeading,
  pDesignTitle,
  divSeeMore,
} from "./designList.module.css";
import smartHomeImage from "../../images/smarthome.jpg";
import onboardImage from "../../images/onboard.png";
import bookingSystemImage from "../../images/booking.png";
import juiceProductImage from "../../images/juice-product.png";

const DesignList = () => {
  return (
    <div className={divOuter} id={"works"}>
      <p className={pHeading}>Good design means good business</p>
      <div className={divDesigns}>
        <div className={divDesign}>
          <img src={smartHomeImage} alt={"Design"} className={imgDesign}/>
          <p className={pDesignCategory}>Full stack application</p>
          <p className={pDesignTitle}>Smart home dashboard</p>
        </div>
        <div className={divDesign}>
          <img src={onboardImage} alt={"Design"} className={imgDesign}/>
          <p className={pDesignCategory}>UI/UX design</p>
          <p className={pDesignTitle}>Onboard application</p>
        </div>
        <div className={divDesign}>
          <img src={bookingSystemImage} alt={"Design"} className={imgDesign}/>
          <p className={pDesignCategory}>Mobile application</p>
          <p className={pDesignTitle}>Booking system</p>
        </div>
        <div className={divDesign}>
          <img src={juiceProductImage} alt={"Design"} className={imgDesign}/>
          <p className={pDesignCategory}>Front end application</p>
          <p className={pDesignTitle}>Juice product homepage</p>
        </div>
      </div>
      <div className={`${divSeeMore} ${pBlue}`}>
        <p>see more&nbsp;&nbsp;&nbsp;</p>
        <p className={`material-icons`}>trending_flat</p>
      </div>
    </div>
  )
}

export default DesignList;
