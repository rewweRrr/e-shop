import React from 'react';
import ProductCard from '../product/card/product-card.component';
import { productListData } from '../../data/product.data';

function App() {
    return (
        <>
            <ProductCard {...productListData[0]} />
        </>
    );
}

export default App;
