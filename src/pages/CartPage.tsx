import { Redirect } from "react-router";
import Cart from "../components/Cart";
import { useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import { Account } from "../types/account";

function CartPage() {
    const account: Account = useAppSelector((state: AppState) => {
        return state.account;
    });
    return (
        <div className="CartPage">
            {account
                ? <Cart />
                : <Redirect to="/login" />
            }
        </div>
    );
}

export default CartPage;
