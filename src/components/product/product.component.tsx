import React, { FC, memo } from 'react';
import { ProductDto } from '../../models/product.model';
import styles from './product.module.css';

type ProductProps = ProductDto;

const Product: FC<ProductProps> = ({ title, image, description }) => {
    return (
        <div className={styles.Product}>
            <img className={styles.Image} src={image} alt="" />
            <div className={styles.ProductInfo}>
                <span className={styles.ProductTitle}>{title}</span>
                <span className={styles.ProductDescription}>{description}</span>
            </div>
        </div>
    );
};

export default memo(Product);
