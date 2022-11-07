export interface ProductDto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRatingDto;
}

export interface ProductRatingDto {
    rate: number;
    count: number;
}
