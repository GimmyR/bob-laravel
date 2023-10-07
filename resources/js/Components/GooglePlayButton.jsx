import React from "react";
import { Button } from "react-bootstrap";
import "../../css/GooglePlayButton.css"
import { router } from "@inertiajs/react";

const GooglePlayButton = function() {

    const handleClick = function() {
        const url = "https://github.com/GimmyR/bread_on_board_mobile/blob/master/bread-on-board-release-1.0.0.apk";
        const a = document.createElement('a');
        a.href = url;
        a.download = url.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <Button variant="dark" className="col-lg-4 mb-2 d-flex flex-row justify-content-center align-items-center" onClick={handleClick}>
            <div className="col-lg-4">
                <i className="bi bi-google-play fs-1"></i>
            </div>
            <div className="col-lg-8 d-flex flex-column align-items-center">
                <span className="available-on-the">Download</span>
                <span className="google-play">Android</span>
            </div>
        </Button>
    );

};

export default GooglePlayButton;