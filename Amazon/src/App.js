import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './src/pages/homepage/HomePage';
import SearchPage from './src/pages/searchpage/SearchPage';
import ProductPage from './src/pages/productpage/ProductPage';

// Render the desired component by changing the component here
ReactDOM.render(<HomePage />, document.getElementById('root'));
ReactDOM.render(<SearchPage />, document.getElementById('root'));
ReactDOM.render(<ProductPage />, document.getElementById('root'));
