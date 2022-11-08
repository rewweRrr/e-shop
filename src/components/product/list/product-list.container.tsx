import React, { FC, memo } from 'react';
import ProductList from './product-list.component';
import { useProducts } from '../../../hooks/products.hook';

type ProductListContainerProps = {};

const ProductListContainer: FC<ProductListContainerProps> = () => {
    const { products, loading, error } = useProducts();

    if (error) {
        return <>{error}</>;
    }
    if (loading) {
        return <>Loading...</>;
    }
    return <ProductList products={products} />;
};

export default memo(ProductListContainer);
