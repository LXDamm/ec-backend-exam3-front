interface Address {
    street: string;
    postcode: string;
    town: string;
}

export interface CartProduct {
    id: string;
    name: string;
    quantity: number;
    imageUrl: string;
}

interface Account {
    id: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    address: Address;
    cart: Array<CartProduct>;
}

export interface AccountProps {
    account: Account;
}

export default Account;