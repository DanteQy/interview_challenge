import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";

const ProductItem = ({ id, name, price, image, currency, description }) => { 

  return (
    <Link to={`/product/${id}`}>
    <Card>
      <Card.Img variant="top" src={image} alt={name}/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text">
          {currency} {price}
      </Card.Footer>
    </Card>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  currency: PropTypes.string,
  description: PropTypes.string,
};

export default ProductItem;
