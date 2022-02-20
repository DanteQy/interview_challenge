import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Products.css";

const Products = ({ products }) => {
  const [filter, setFilter] = useState("");

  function handleSubmit(e) {
    setFilter(e.target.search.value);
    e.preventDefault();
  }

  return (
    <>
      <div className="header topnav">
        <a href="/">
          <img src={logo} className="adidas-logo" alt="logo"/>
        </a>
        <div className="header-right">
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <label>
                <input type="text" laceholder="Search.." name="search" />
              </label>
              <button type="submit" value="Search">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <Row xs={1} md={3} lg={4} className="g-4">
        {products
          .filter((word) => word.name.includes(filter))
          .map((product) => (
            <Col key={product.id}>
              <ProductItem
                key={product.id}
                id={product.id}
                currency={product.currency}
                description={
                  product.description
                    ? product.description
                    : "Description not Defined"
                }
                image={
                  product.imgUrl
                    ? product.imgUrl
                    : "https://via.placeholder.com/150"
                }
                price={product.price ? product.price : "Price not defined"}
                name={product.name ? product.name : "Name not defined"}
              />
            </Col>
          ))}
      </Row>
    </>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
