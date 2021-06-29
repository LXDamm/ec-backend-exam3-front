interface Address {
    street: string;
    postcode: string;
    town: string;
}

interface Account {
    id: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    address: Address;
}

export interface AccountProps {
    account: Account;
}

export default Account;