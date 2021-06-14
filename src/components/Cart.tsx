import { Link } from "react-router-dom";

import { useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import Spinner from "./Spinner";
import './Cart.scss';

function Cart() {
    const cart = useAppSelector((state: AppState) => state.account.cart);
    const renderedCartList = cart.map((item) => {
        return (<li key={item.id}><Link to={`/products/${item.id}`}>{item.id}</Link><div className="product-container"><div className="product-quantity"><button>-</button><p>{item.quantity}</p><button>+</button></div></div></li>);
    });
    return (
        <div className="Cart">
            {cart
                ? <ul className="cart-list">{renderedCartList}</ul>
                : <Spinner />
            }
        </div>
    );
}

export default Cart;
