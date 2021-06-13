import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import { Account } from "../../types/account";

interface Props {
    account: Account;
}

function AccountEditForm(props: Props) {
    const [formEdit, saveFormEdit] = useState({ userEditToggle: false, addressEditToggle: false });
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {

    };
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {

    };
    const handleFirstnameChange = (event: ChangeEvent<HTMLInputElement>) => {

    };
    const handleLastnameChange = (event: ChangeEvent<HTMLInputElement>) => {

    };
    const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) => {

    };
    const handlePostcodeChange = (event: ChangeEvent<HTMLInputElement>) => {

    };
    const handleTownChange = (event: ChangeEvent<HTMLInputElement>) => {

    };
    const handleUserSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const handleAddressSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <div className="AccountEditForm">
            <form className="user-form" onSubmit={(event) => handleUserSave(event)}>
                <label className="user-form-username">
                    <p>Username</p>
                    {formEdit.userEditToggle ?
                        <input className="user-form-edit" required type="text" placeholder="username" defaultValue={props.account.username} onChange={(event) => handleUsernameChange(event)} />
                        :
                        <p className="user-form-show">{props.account.username}</p>
                    }
                </label>
                <label className="user-form-password">
                    <p>Password</p>
                    {formEdit.userEditToggle ?
                        <input className="user-form-edit" required type="password" pattern="[a-zA-Z0-9]{6,32}" placeholder="password" defaultValue={props.account.password} onChange={(event) => handlePasswordChange(event)} />
                        :
                        <p className="user-form-show">{props.account.password}</p>
                    }
                </label>
                <br></br>
                <button className="user-form-edit-button" type="button">Edit</button>
                <button className="user-form-save-button" type="submit">Save</button>
            </form>
            <form className="address-form" onSubmit={(event) => handleAddressSave(event)}>
                <label className="address-form-street">
                    <p>Firstname</p>
                    <input className="address-form-input" required type="text" onChange={(event) => handleFirstnameChange(event)} />
                </label>
                <label className="address-form-postcode">
                    <p>Lastname</p>
                    <input className="address-form-input" required type="text" onChange={(event) => handleLastnameChange(event)} />
                </label>
                <label className="address-form-street">
                    <p>Street</p>
                    <input className="address-form-input" required type="text" onChange={(event) => handleStreetChange(event)} />
                </label>
                <label className="address-form-postcode">
                    <p>Postcode</p>
                    <input className="address-form-input" required type="text" onChange={(event) => handlePostcodeChange(event)} />
                </label>
                <label className="address-form-town">
                    <p>Town</p>
                    <input required type="text" onChange={(event) => handleTownChange(event)} />
                </label>
                <br></br>
                <button className="address-form-edit-button" type="button">Edit</button>
                <button className="address-form-save-button" type="submit">Save</button>
            </form>
        </div>
    );
}

export default AccountEditForm;
