import { Product } from '../models/product.model';
import axios, { AxiosResponse } from 'axios';
import { PRODUCTS_URl } from '../constants/api.constants';

export function fetchProductsApi(): Promise<AxiosResponse<Product[]>> {
    return axios.get(PRODUCTS_URl);
}
