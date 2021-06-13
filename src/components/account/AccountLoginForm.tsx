import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { loginAccount } from "../../api/api";
import { setAccount } from "../../redux/accountSlice";

interface LoginCredentials {
    username: string;
    password: string;
}

function AccountLoginForm() {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState<LoginCredentials>({username: '', password: ''});
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, username: event.target.value});
    };
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, password: event.target.value});
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (credentials) {
            loginAccount(credentials.username, credentials.password)
                .then((response) => {
                    dispatch(setAccount(response.data));
                })
                .catch((error) => console.error(error));
        }
    };
    return (
        <div className="AccountLoginForm">
            <form className="login-form" onSubmit={(event) => handleSubmit(event)}>
                <label className="login-form-username">
                    <p>Username</p>
                    <input required type="text" placeholder="username" onChange={(event) => handleUsernameChange(event)} />
                </label>
                <label className="login-form-password">
                    <p>Password</p>
                    <input required type="password" pattern="[a-zA-Z0-9]{6,32}" placeholder="password" onChange={(event) => handlePasswordChange(event)} />
                </label>
                <br></br>
                <button className="login-form-button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default AccountLoginForm;
