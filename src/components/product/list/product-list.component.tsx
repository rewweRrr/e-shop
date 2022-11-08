import React, { FC, memo } from 'react';
import { Product } from '../../../models/product.model';
import ProductCard from '../card/product-card.component';
import styles from './product-list.module.css';

type ProductListProps = { products: Product[] };

const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <div className={styles.List}>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default memo(ProductList);
