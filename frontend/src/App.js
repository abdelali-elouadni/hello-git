import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Product from './pages/product';
// import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/product' component={Product} exact />
        <Route path='/product/:id' component={ProductScreen} exact />
        {/* <Route path='/' component={HomeScreen} exact /> */}

      </Switch>
    </Router>
  );
}

export default App;
