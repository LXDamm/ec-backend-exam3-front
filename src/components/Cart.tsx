import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import Spinner from "./Spinner";
import './Cart.scss';
import { decreaseCartProduct, increaseCartProduct, removeCartProduct } from "../redux/accountSlice";

function Cart() {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state: AppState) => state.account.cart);
    const renderedCartList = cart.map((item) => {
        return (<li key={item.id}><Link to={`/products/${item.id}`}><p>{item.name}</p><img src={item.imageUrl} /></Link><div className="product-container"><div className="product-quantity"><button onClick={() => decreaseQuantity(item.id)}>-</button><p>{item.quantity}</p><button onClick={() => increaseQuantity(item.id)}>+</button></div><button onClick={() => remove(item.id)}></button></div></li>);
    });
    const remove = (productId: string) => {
        dispatch(removeCartProduct(productId));
    };
    const increaseQuantity = (productId: string) => {
        dispatch(increaseCartProduct(productId));
    };
    const decreaseQuantity = (productId: string) => {
        dispatch(decreaseCartProduct(productId));
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
