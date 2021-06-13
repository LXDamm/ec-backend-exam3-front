import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../api/api";
import { useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import { Product } from "../types/product";
import Spinner from "./Spinner";

function Cart() {
    const accountId = useAppSelector((state: AppState) => {
        return state.account.id;
    });
    const [cart, setCart] = useState<Array<Product>>();
    const renderedCartList = cart?.map((product) => {
        return (<li key={product.id}><Link to={`/products/${product.id}`}><div className="product-container"><img src={product.imageUrl} alt="Bild" /><p>{product.name}</p></div></Link></li>);
    });
    useEffect(() => {
        getCart(accountId)
            .then((response) => {
                setCart(response.data);
            })
            .catch((error) => console.error(error));
    }, [accountId]);
    return (
        <div className="Cart">
            {cart
                ? <ul>{renderedCartList}</ul>
                : <Spinner />
            }
        </div>
    );
}

export default Cart;
