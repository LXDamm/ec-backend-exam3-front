import AccountLoginForm from "../components/account/AccountLoginForm";

function AccountLoginPage() {
    /*return (
        <div className="AccountLoginPage">
            <AccountLoginForm />
        </div>
    );*/
    /*const dispatch = useDispatch();
    const loginDefault = () => {
        const account: Account = {
            id: '6bfafd30-cb5d-11eb-b426-9829a66bedbe',
            username: 'olle',
            password: 'qassword',
            firstname: 'Olle',
            lastname: 'Svensson',
            address: {
                street: 'Gatan 2',
                postcode: '33333',
                town: 'Niceville',
            },
            cart: []
        };
        dispatch(setAccount(account));
    };*/
    return (
        <div className="AccountLoginPage">
            <AccountLoginForm />
        </div>
    );
}

export default AccountLoginPage;