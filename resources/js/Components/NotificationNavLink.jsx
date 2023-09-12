import React from "react";
import { Nav } from "react-bootstrap";

const NotificationNavLink = function() {
    return (
        <Nav.Link href="#">
            <i className="bi bi-bell fs-4"></i>
        </Nav.Link>
    );
};

export default NotificationNavLink;