import React, { FC, memo } from 'react';
import { ProductDto } from '../../models/product.model';
import styles from './product.module.css';

type ProductProps = ProductDto;

const Product: FC<ProductProps> = ({ title, image }) => {
    return (
        <div className={styles.Product}>
            {title}
            <img className={styles.Image} src={image} alt="" />
        </div>
    );
};

export default memo(Product);
