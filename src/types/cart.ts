export interface CartItem {
    id: string;
    quantity: number;
}

interface Cart {
    products: Array<CartItem>;
}

export default Cart;