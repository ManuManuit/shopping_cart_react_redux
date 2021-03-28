import React, { Component } from 'react';
import './App.css';

/**Components */
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
        <Cart />
      </div>
    );
  }
}

export default App;
