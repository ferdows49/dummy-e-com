import "./App.css";
import Nav from "./components/Nav";
import { Switch, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Error from "./components/404/Error";
import CreateProduct from "./components/CreateProduct";
import ProductDetails from "./components/ProductDetails";
import EditProduct from "./components/EditProduct";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <div className="App">
      <Loader>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/create-product">
            <CreateProduct />
          </Route>
          <Route path="/product-details/:productId" exact>
            <ProductDetails />
          </Route>
          <Route path="/product-details/:productId/edit-product">
            <EditProduct />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Loader>
    </div>
  );
}

export default App;
