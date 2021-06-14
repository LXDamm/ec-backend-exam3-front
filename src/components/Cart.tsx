import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import Spinner from "./Spinner";

function Cart() {
    const cart = useAppSelector((state: AppState) => state.account.cart);
    const renderedCartList = () => {
        cart?.map((item) => {
            return (<li key={item.id}><Link to={`/products/${item.id}`}><div className="product-container">product id: {item.id}</div></Link></li>);
        });
    };
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
