import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "../Products/Products";
import ProductPage from "../ProductPage/ProductPage";
import { useState, useEffect } from "react";
import { getProducts } from "../../Utils/ProductUtils";
import "./App.css";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsResponse = await getProducts();
      //to remove duplicates from the fetched products
      var sanitizedProducts = productsResponse.filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i
      );

      setProducts(sanitizedProducts);
    };

    fetchProducts();
  }, []);


  return (
    <Router>
      <div className="App">

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <section>
                <Products products={products} />
              </section>
            </>
          )}
        />
        <Route path="/product/:productId" component={ProductPage} />
      </div>
    </Router>
  );
}

export default App;
