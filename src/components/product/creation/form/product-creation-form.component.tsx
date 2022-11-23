import React, { FC, memo, useCallback, useState } from 'react';
import { Product } from '../../../../models/product.model';
import styles from './product-creation-form.module.css';
import Input from '../../../input/input.component';
import Button from '../../../button/button';

type ProductCreationFormProps = { onSubmit: (product: Partial<Product>) => void; loading: boolean };

const ProductCreationForm: FC<ProductCreationFormProps> = ({ onSubmit, loading }) => {
    const [error, setError] = useState(false);

    const handleSubmitClick = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            const elements = (e.target as HTMLFormElement).elements;
            const title = (elements.namedItem('title') as HTMLInputElement).value;
            const description = (elements.namedItem('description') as HTMLInputElement).value;

            if (!title || title.trim().length === 0) {
                setError(true);
                return;
            }
            onSubmit({
                title,
                description,
            });
        },
        [onSubmit]
    );

    return (
        <form onSubmit={handleSubmitClick} className={styles.Form} onChange={() => setError(false)}>
            <Input name="title" type="text" placeholder="Title" />
            <Input name="description" type="text" placeholder="Description" />
            <span className={styles.Error}>{error && "Title shouldn't be empty"}</span>
            <Button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Create'}
            </Button>
        </form>
    );
};

export default memo(ProductCreationForm);
