import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ProductDetails from './pages/Product/ProductDetails';

function App() {
  return (
    <div>
      <Header />
        <Route path='/'>
           <Home />
        </Route>
          <Route path='/products/:id' exact>
            <ProductDetails />
        </Route>          
    </div>
  );
}

export default App;
