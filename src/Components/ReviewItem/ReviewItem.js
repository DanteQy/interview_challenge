import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ReviewItem = ({ number, productId, locale, rating, text }) => {
  const style = {
    borderLeft: `solid 3px 'lightgrey'`,
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "lightgrey",
    color: "black",
    width: "-webkit-fill-available",
    width: "fill-available"
  };

  return (
      <div style={style}>
        <h3>Review: {number}<p>{rating}</p></h3>
        <p>{text}</p>
      </div>
  );
};

ReviewItem.propTypes = {
  number: PropTypes.number,
  productId: PropTypes.string,
  locale: PropTypes.string,
  rating: PropTypes.number,
  text: PropTypes.string
};

export default ReviewItem;
