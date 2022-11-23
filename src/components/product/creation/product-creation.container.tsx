import React, { FC, memo, useCallback, useState } from 'react';
import Modal from '../../modal/modal.component';
import CreateButton from '../../button/create/create-button.component';
import ProductCreationForm from './form/product-creation-form.component';
import { Product } from '../../../models/product.model';
import { createProductApi } from '../../../services/product-api.service';

type ProductCreationContainerProps = { onCreate: (product: Product) => void };

const ProductCreationContainer: FC<ProductCreationContainerProps> = ({ onCreate }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCreateButtonClick = useCallback(() => {
        setModalVisible(true);
    }, []);

    const handleModalClose = useCallback(() => {
        setModalVisible(false);
    }, []);

    const handleSubmit = useCallback(
        async (product: Partial<Product>) => {
            setLoading(true);
            try {
                const response = await createProductApi(product);
                setModalVisible(false);
                onCreate(response.data);
            } catch (e) {
                setError(`Something went wrong! Error: ${e}`);
            } finally {
                setLoading(false);
            }
        },
        [onCreate]
    );

    return (
        <>
            <Modal title="Create Product" visible={modalVisible} onClose={handleModalClose}>
                {error ? error : <ProductCreationForm onSubmit={handleSubmit} loading={loading} />}
            </Modal>
            <CreateButton onClick={handleCreateButtonClick} />
        </>
    );
};

export default memo(ProductCreationContainer);
