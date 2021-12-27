import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Product from "./components/products/Product";
import Contacts from "./components/contacts/Contacts";
import Favori from "./components/favori/Favori";
import Sepet from "./components/sepet/Sepet";
import ProductDetails from "./components/productDetails/ProductDetails";



function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <nav className="nav">
            <ul className="navbarContainer">
              <div className="navbarLeft">
                <li>
                  <Link className="navbar" to="/">Ürünler</Link>
                </li>
                <li  >
                  <Link className="navbar" to="/contacts">iletişim</Link>
                </li>
              </div>
              <div className="navbarRight">
                <li >
                  <Link className="navbar" to="/favori">Favorilerim</Link>
                </li>
                <li >
                  <Link className="navbar" to="/sepet">Sepetim</Link>
                </li>
              </div>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/favori" component={Favori} />
            <Route path="/sepet" component={Sepet} />
            <Route path="/product/:id" component={ProductDetails} />


          </Switch>
        </div>
      </Router>

    </div>
  );
}


export default App;
