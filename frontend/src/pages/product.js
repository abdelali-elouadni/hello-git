import React from 'react';
import Product from '../components/Product/Product';
import data from '../data';
import '../index.css';

export default function HomeScreen() {
    return (
        <div className="row center">
        {data.products.map(product => (
          <Product 
            key={product._id} 
            product={product}>
          </Product>
        ))}
      </div>
    )
}