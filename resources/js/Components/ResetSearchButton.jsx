import React from "react";
import { Button } from "react-bootstrap";
import '../../css/ResetSearchButton.css';

const ResetSearchButton = function({ onClick }) {
    return (
        <Button variant="light" className="reset-search-button" onClick={onClick}>
            <i className="bi bi-x-lg"></i>
        </Button>
    );
};

export default ResetSearchButton;