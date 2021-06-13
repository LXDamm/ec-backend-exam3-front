import { useSelector } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import { Account } from "../types/account";

function AccountPage() {
    const account: Account = useSelector((state: AppState) => {
        return state.account;
    });
    return (
        <div className="AccountPage">
            <p>Work!</p>
            <p>{account.username}</p>
        </div>
    );
}

export default AccountPage;
