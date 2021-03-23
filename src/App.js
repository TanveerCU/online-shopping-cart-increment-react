import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Contact from './Contact';
import Jeans from './Jeans';
import Nav from './Nav';
import NotFound from './NotFound';
import Shoes from './Shoes';
import Tshirt from './Tshirt';

function App() {
  return (
    <Switch>
    <Route exact path="/online-shopping-cart-increment-react/">
      <Nav />
        <h1 className="text-center mt-5 pt-5">welcome to online shop</h1>
      </Route>
      <Route exact path="/jeans">
        <Jeans />
      </Route>
      <Route exact path="/t-shirt">
        <Tshirt />
      </Route>
      <Route exact path="/shoes">
        <Shoes />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route>
        <NotFound />
      </Route> 
    </Switch>
  );
}

export default App;
