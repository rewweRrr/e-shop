import React, { FC, memo } from 'react';
import ProductList from './product-list.component';
import { useProducts } from '../../../hooks/products.hook';
import ProductCreationContainer from '../creation/product-creation.container';

type ProductListContainerProps = {};

const ProductListContainer: FC<ProductListContainerProps> = () => {
    const { products, addProduct, loading, error } = useProducts();

    if (error) {
        return <>{error}</>;
    }
    if (loading) {
        return <>Loading...</>;
    }
    return (
        <>
            <ProductList products={products} />
            <ProductCreationContainer onCreate={product => addProduct(product)} />
        </>
    );
};

export default memo(ProductListContainer);
