import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import Spinner from "./Spinner";
import './Cart.scss';
import { decreaseCartProduct, increaseCartProduct, removeCartProduct } from "../redux/accountSlice";
import Product, { ProductProps } from "../types/product";

function Cart(props: ProductProps) {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state: AppState) => state.account.cart);
    const cartProducts = cart.map((item): Product | undefined => {
        return props.products.find((product) => {
            return item.id === product.id;
        });
    });
    const renderedCartList = cartProducts.map((item) => {
        return (<li key={item!.id}><Link to={`/products/${item!.id}`}>{item!.name}</Link><div className="product-container"><img src={item?.imageUrl} alt="bild på produkt" /><div className="product-quantity"><button onClick={() => decreaseQuantity(item!.id)}>-</button><p></p><button onClick={() => increaseQuantity(item!.id)}>+</button></div><button onClick={() => remove(item!.id)}></button></div></li>);
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
