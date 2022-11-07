import React from 'react';
import Product from '../product/product.component';
import { productListData } from '../../data/product.data';

function App() {
    return (
        <>
            <Product {...productListData[0]} />
            <Product {...productListData[1]} />
            <Product {...productListData[2]} />
        </>
    );
}

export default App;
