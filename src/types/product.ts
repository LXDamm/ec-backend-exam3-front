interface Product {
    id: string;
    name: string;
    description: string;
    category: string;
    cost: number;
    stock: number;
    imageUrl: string;
}

interface ProductProps {
    products: Array<Product>;
}

export type { Product, ProductProps };