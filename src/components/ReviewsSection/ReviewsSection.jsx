import React, { useEffect, useState } from "react";
import { StyledP, StyledText, WrapReviewsCards, WrapSection } from "./ReviewsSection.styled";
import ReviewItem from "./ReviewItem/ReviewItem";
import { useDispatch } from "react-redux";
import { getReviewsThunk } from "../../redux/reviews/reviewsThunk";

const ReviewsSection = () => {

    const [reviews, setReviews] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getReviewsThunk())
        .unwrap()
        .then((data) => {
            setReviews(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [dispatch]);


  return (
    <WrapSection>
      <StyledText>Reviews</StyledText>
      <StyledP>Search for Medicine, Filter by your location</StyledP>
      <WrapReviewsCards>
        {reviews.map(review => <ReviewItem key={review._id} review={review}/>)}
      </WrapReviewsCards>
    </WrapSection>
  );
};

export default ReviewsSection;
