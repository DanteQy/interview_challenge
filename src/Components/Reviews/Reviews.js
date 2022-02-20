import PropTypes from "prop-types";
import ReviewItem from "../ReviewItem/ReviewItem";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import { getReviews, addReviews } from "../../Utils/ReviewUtils";
import "./Reviews.css";

const Reviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [submitReview, setSubmitReview] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
    const [index, setIndex] = useState(0);

  async function addReviewsOnSubmit(e) {
    e.preventDefault();

    const reviewsResponse = await addReviews(id, {
      "productId": "string",
      "locale": "string",
      "rating": rating,
      "text": e.target.review.value
    });
    setIndex(index+1);

  };


  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsResponse = await getReviews(id);
      setReviews(reviewsResponse);
    };



    fetchReviews();
}, [index]);

  return (
    <div>
      <div>
        <Button variant="outline-dark">Add Review </Button>
        <form onSubmit={addReviewsOnSubmit}>
          <label>
            Review:
            <input type="textarea" name="review" />
          </label>
          <label>
            Rating:
            <div className="star-rating">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <button
                    type="button"
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                  >
                    <span className="star">&#9733;</span>
                  </button>
                );
              })}
            </div>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

      {reviews.map((review, index) => (
        <ReviewItem
          key={index}
          number={index}
          productId={review.productId}
          locale={review.locale}
          rating={review.rating}
          text={review.text}
        />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;
