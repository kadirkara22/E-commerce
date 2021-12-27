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



function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/contacts">iletişim</Link>
              </li>
              <li>
                <Link to="/favori">Favorilerim</Link>
              </li>
              <li>
                <Link to="/sepet">Sepetim</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/favori" component={Favori} />
            <Route path="/sepet" component={Sepet} />


          </Switch>
        </div>
      </Router>

    </div>
  );
}


export default App;
