import React from "react";
import { Button } from "react-bootstrap";
import "../../css/AppStoreButton.css";

const AppStoreButton = function() {
    return (
        <Button variant="dark" className="col-lg-4 mb-2 d-flex flex-row justify-content-center align-items-center">
            <div className="col-lg-4">
                <i className="bi bi-apple fs-1"></i>
            </div>
            <div className="col-lg-8 d-flex flex-column align-items-center">
                <span className="get-it-on-the">Download</span>
                <span className="app-store">iOS</span>
            </div>
        </Button>
    );
};

export default AppStoreButton;