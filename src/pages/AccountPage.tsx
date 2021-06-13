import { useSelector } from "react-redux";
import AccountEditForm from "../components/account/AccountEditForm";
import { useAppSelector } from "../redux/hooks";
import { AppState } from "../redux/store";
import { Account } from "../types/account";

function AccountPage() {
    const account: Account = useAppSelector((state: AppState) => {
        return state.account;
    });
    return (
        <div className="AccountPage">
            <AccountEditForm account={account} />
        </div>
    );
}

export default AccountPage;
