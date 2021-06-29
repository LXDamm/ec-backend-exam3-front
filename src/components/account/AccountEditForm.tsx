import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import api from "../../api/api";
import Account, { AccountProps } from "../../types/account";

function AccountEditForm(props: AccountProps) {
    const [formEdit, setFormEdit] = useState({ userEditToggle: false, addressEditToggle: false });
    const [account, setAccount] = useState<Account>({
         username: '', password: '', id: '', firstname: '', lastname: '', address: {
             street: '', postcode: '', town: ''
         }
    });
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, username: event.target.value});
    };
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, password: event.target.value});
    };
    const handleFirstnameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, firstname: event.target.value});
    };
    const handleLastnameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, lastname: event.target.value});
    };
    const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, address: {...account.address, street: event.target.value}});
    };
    const handlePostcodeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, address: {...account.address, postcode: event.target.value}});
    };
    const handleTownChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAccount({...account, address: {...account.address, town: event.target.value}});
    };
    const handleUserSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        api.updateAccount(account.id, account);
    };
    const handleAddressSave = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        api.updateAccount(account.id, account);
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
                <button className="user-form-edit-button" type="button" onClick={() => setFormEdit({ userEditToggle: true, addressEditToggle: false }) } >Edit</button>
                <button className="user-form-save-button" type="submit">Save</button>
            </form>
            <form className="address-form" onSubmit={(event) => handleAddressSave(event)}>
                <label className="address-form-street">
                    <p>Firstname</p>
                    {formEdit.addressEditToggle ?
                        <input className="address-form-input" required type="text" defaultValue={props.account.firstname} onChange={(event) => handleFirstnameChange(event)} />
                        :
                        <p className="address-form-show">{props.account.firstname}</p>
                    }</label>
                <label className="address-form-postcode">
                    <p>Lastname</p>
                    {formEdit.addressEditToggle ?
                        <input className="address-form-input" required type="text" defaultValue={props.account.lastname}  onChange={(event) => handleLastnameChange(event)} />
                        :
                        <p className="address-form-show">{props.account.lastname}</p>
                    }</label>
                <label className="address-form-street">
                    <p>Street</p>
                    {formEdit.addressEditToggle ?
                        <input className="address-form-input" required type="text" defaultValue={props.account.address.street}  onChange={(event) => handleStreetChange(event)} />
                        :
                        <p className="address-form-show">{props.account.address.street}</p>
                    }</label>
                <label className="address-form-postcode">
                    <p>Postcode</p>
                    {formEdit.addressEditToggle ?
                        <input className="address-form-input" required type="text" defaultValue={props.account.address.postcode}  onChange={(event) => handlePostcodeChange(event)} />
                        :
                        <p className="address-form-show">{props.account.address.postcode}</p>
                    }</label>
                <label className="address-form-town">
                    <p>Town</p>
                    {formEdit.addressEditToggle ?
                        <input required type="text"  defaultValue={props.account.address.town} onChange={(event) => handleTownChange(event)} />
                        :
                        <p className="address-form-show">{props.account.address.town}</p>
                    }</label>
                <br></br>
                <button className="address-form-edit-button" type="button" onClick={() => setFormEdit({ userEditToggle: false, addressEditToggle: true }) }>Edit</button>
                <button className="address-form-save-button" type="submit">Save</button>
            </form>
        </div>
    );
}

export default AccountEditForm;
