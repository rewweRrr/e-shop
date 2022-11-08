import React, { FC, memo } from 'react';
import { ProductDto } from '../../../models/product.model';
import styles from './product-card.module.css';

type ProductCardProps = ProductDto;

const ProductCard: FC<ProductCardProps> = ({ title, image, description, price }) => {
    return (
        <div className={styles.Card}>
            <img className={styles.Image} src={image} alt="" />
            <div className={styles.CardInfo}>
                <span className={styles.CardTitle}>{title}</span>
                <span className={styles.CardDescription}>{description}</span>
            </div>
            <span className={styles.CardPrice}>{price}$</span>
        </div>
    );
};

export default memo(ProductCard);
