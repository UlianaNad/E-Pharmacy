import PropTypes from "prop-types";
import photo from "../../../assets/maria-tkachuk.png";
import { CustomerName, ReviewCard, StyledPhoto, TextReview } from "./ReviewItem.styled";
const ReviewItem = ({ review }) => {
    console.log(review.photo)
  return (
    <ReviewCard>
      <StyledPhoto src={photo} alt="customer-photo" />
      <CustomerName>{review.name}</CustomerName>
      <TextReview>{review.testimonial}</TextReview>
    </ReviewCard>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.shape({
    name: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewItem;
