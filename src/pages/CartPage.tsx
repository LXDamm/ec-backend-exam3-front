import { useState, useEffect } from "react";
import { Redirect } from "react-router";
import api from "../api/api";
import Cart from "../components/Cart";
import { useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import Account from "../types/account";
import Product from "../types/product";

function CartPage() {
    const [products, setProducts] = useState<Array<Product>>();
    const account: Account = useAppSelector((state: AppState) => {
        return state.account;
    });
    useEffect(() => {
        api.getProducts()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => console.error(error));
    }, []);
    return (
        <div className="CartPage">
            {account && products
                ? <Cart products={products} />
                : <Redirect to="/login" />
            }
        </div>
    );
}

export default CartPage;
