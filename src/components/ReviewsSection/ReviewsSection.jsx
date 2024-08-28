import React, { useState } from "react";
import { StyledP, StyledText } from "./ReviewsSection.styled";
import ReviewItem from "./ReviewItem/ReviewItem";

const ReviewsSection = () => {

    const [reviews, setReviews] = useState([]);



  return (
    <div>
      <StyledText>Reviews</StyledText>
      <StyledP>Search for Medicine, Filter by your location</StyledP>
      <ul>
        {reviews.map(review => <ReviewItem key={review._id} review={review}/>)}
      </ul>
    </div>
  );
};

export default ReviewsSection;
