import React from 'react';
import './App.css';
import Store from './components/Store';
import products from './components/products';

function App() {
    return (
      <div className='App'>
        <Store products={products} />
      </div>
    );
}

export default App;
