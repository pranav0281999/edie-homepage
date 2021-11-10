import React from 'react';
import {
  divOuter,
  pReview,
  divReviewer,
  imgReviewer,
  divReviewerDetails,
  pName,
  pTitle
} from "./review.module.css";
import reviewerImage from "../../images/person4.png";

function Review(props) {
  return (
    <div className={divOuter} id={"clients"}>
      <p className={pReview}>
        “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
      </p>
      <div className={divReviewer}>
        <img src={reviewerImage} alt={"Reviewer"} className={imgReviewer}/>
        <div className={divReviewerDetails}>
          <p className={pName}>Carlos Tran</p>
          <p className={pTitle}>The Decorate Gatsby</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
