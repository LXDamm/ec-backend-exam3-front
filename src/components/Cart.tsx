import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import Spinner from "./Spinner";
import './Cart.scss';
import { deincreaseCartProduct, increaseCartProduct } from "../redux/accountSlice";

function Cart() {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state: AppState) => state.account.cart);
    const renderedCartList = cart.map((item) => {
        return (<li key={item.id}><Link to={`/products/${item.id}`}>{item.id}</Link><div className="product-container"><div className="product-quantity"><button onClick={() => changeQuantity(-1, item.id)}>-</button><p>{item.quantity}</p><button onClick={() => changeQuantity(1, item.id)}>+</button></div></div></li>);
    });
    const changeQuantity = (change: number, productId: string) => {
        if (change > 0) dispatch(increaseCartProduct(productId));
        else dispatch(deincreaseCartProduct(productId));
    };
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
