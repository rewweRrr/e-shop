import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { fetchProductsApi } from '../services/product-api.service';

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function fetchProducts() {
        setLoading(true);
        try {
            const response = await fetchProductsApi();
            setProducts(response.data);
        } catch (e) {
            setError(`Something went wrong! Error: ${e}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        void fetchProducts();
    }, []);

    return { products, loading, error };
}
