import React, { useState } from "react";
import { Button, NavDropdown } from "react-bootstrap";
import '../../css/AccountNavDropdown.css';
import ConfirmModal from "./ConfirmModal";

const AccountNavDropdown = function() {

    const [user, setUser] = useState(null);

    const [showDropdown, setShowDropdown] = useState(false);

    const [showConfirm, setShowConfirm] = useState(false);

    const clickMyProfile = function() {
        
    };

    const disconnect = function() {
        
    };

    return (
        <>
            <NavDropdown title={<i className="bi bi-person-circle fs-3"></i>} drop="start" show={showDropdown} onClick={() => setShowDropdown(!showDropdown)}>
                <NavDropdown.ItemText className="text-center">
                    <span className="account-nav-dropdown-username">{user.userName}</span>
                </NavDropdown.ItemText>
                <NavDropdown.Divider/>
                <NavDropdown.Item href="#" onClick={clickMyProfile} className="text-center">My profile</NavDropdown.Item>
                <NavDropdown.Item href="#" className="text-center">Settings</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.ItemText className="d-flex justify-content-center">
                    <Button variant="danger" onClick={() => setShowConfirm(true)}>Disconnect</Button>
                </NavDropdown.ItemText>
            </NavDropdown>
            <ConfirmModal title="Disconnect" body="Are you sure you want to log out ?" show={showConfirm} setShow={setShowConfirm} onConfirm={disconnect}/>
        </>
    );
};

export default AccountNavDropdown;