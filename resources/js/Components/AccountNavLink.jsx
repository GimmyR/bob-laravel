import React from "react";
import { Nav } from "react-bootstrap";

const AccountNavLink = function({ handleShow }) {
    return (
        <Nav.Link href="#" onClick={handleShow}>
            <i className="bi bi-person-circle fs-3"></i>
        </Nav.Link>
    );
};

export default AccountNavLink;