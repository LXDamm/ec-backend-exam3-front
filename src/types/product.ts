interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    cost: number;
    stock: number;
    imageUrl: string;
}

export interface ProductProps {
    products: Array<Product>;
}

export default Product;