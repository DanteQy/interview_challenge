import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "../../Utils/ProductUtils";
import { getReviews, addReviews } from "../../Utils/ReviewUtils";
import Reviews from "../Reviews/Reviews";
import logo from '../../assets/logo.png';

const ProductPage = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      const detailsFromServer = await getProduct(productId);
      setDetails(detailsFromServer);
    };
    getDetails();
  }, [productId]);

  return (

    <div>
        <div className="header topnav">
            <a href="/"><img src={logo} className="adidas-logo"/></a>
            <div className="header-right">
                <div>
                  <Link to="/">&#11164; Back</Link>
                </div>
            </div>
          </div>

      <div>
        <img
          src={
            details.imgUrl ? details.imgUrl : "https://via.placeholder.com/150"
          }
          alt={details.name}
        />
        <div >
          <p>Name: {details.name}</p>
          <p>Description: {details.description}</p>
          <p>
            Price: {details.currency} {details.price}
          </p>
        </div>
        <div >
            <Reviews id={productId} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
