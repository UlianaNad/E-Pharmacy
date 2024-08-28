import React from "react";

const ReviewItem = ({review}) => {
  return (
    <li>
      <img src={review.photo} alt="customer-photo" />
      <p>{review.name}</p>
      <p>{review.text}</p>
    </li>
  );
};

export default ReviewItem;
