import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import Spinner from "./Spinner";
import './Cart.scss';
import Product from "../types/product";
import { useState } from "react";
import { useEffect } from "react";
import api from "../api/api";
import { decreaseCartProduct, increaseCartProduct, removeCartProduct } from "../redux/cartSlice";
import { CartItem } from "../types/cart";

interface CombinedProduct {
    id: string;
    quantity: number;
    name: string;
    cost: number;
    imageUrl: string;
}

interface Props {
    accountId: string;
}

function Cart(props: Props) {
    const [cart, setCart] = useState<Array<CombinedProduct>>([]);
    const dispatch = useAppDispatch();
    const renderedCartList = cart.map((item) => {
        return (
            <li key={item.id}>
                <Link to={`/products/${item.id}`}>{item.name}</Link>
                <div className="product-container">
                    <img src={item.imageUrl} alt="bild på produkt" />
                    <div className="product-quantity">
                        <button onClick={() => updateQuantity(item.id, item.quantity, 1)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => updateQuantity(item.id, item.quantity, -1)}>+</button>
                    </div>
                    <button onClick={() => remove(item.id)}>Remove from cart</button>
                </div>
            </li>
        );
    });
    const remove = (productId: string) => {
        api.removeCartProduct(props.accountId, productId);
        dispatch(removeCartProduct(productId));
    };
    const updateQuantity = (productId: string, quantity: number, amount: number) => {
        if (amount > 0) {
            api.updateCartProduct(props.accountId, productId, quantity + amount);
            dispatch(increaseCartProduct(productId));
        } else if (quantity > 0) {
            api.updateCartProduct(props.accountId, productId, quantity + amount);
            dispatch(decreaseCartProduct(productId));
        }
    };
    useEffect(() => {
        api.getCart(props.accountId)
            .then((res) => {
                const cart: Array<CartItem> = res.data;
                if (cart) {
                    api.getProducts()
                        .then((res) => {
                            const products: Array<Product> = res.data;
                            if (products) {
                                let combinedCart: Array<CombinedProduct> = [];
                                cart.forEach((cartItem) => {
                                    products.forEach((productItem) => {
                                        if (cartItem.id === productItem.id) combinedCart.push({
                                            id: cartItem.id,
                                            name: productItem.name,
                                            quantity: cartItem.quantity,
                                            cost: productItem.cost,
                                            imageUrl: productItem.imageUrl
                                        });
                                    });
                                });
                                setCart(combinedCart);
                            }
                        })
                        .catch(err => console.error(err));
                }
            })
            .catch((err) => console.error(err));
    }, [props.accountId]);
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
