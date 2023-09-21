import { router } from "@inertiajs/react";
import React from "react";
import { Nav } from "react-bootstrap";

const AccountNavLink = function() {

    const handleClick = function() {
        router.get("/user/connect");
    };

    return (
        <Nav.Link href="#" onClick={handleClick}>
            <i className="bi bi-person-circle fs-3"></i>
        </Nav.Link>
    );

};

export default AccountNavLink;