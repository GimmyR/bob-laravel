import React from "react";

const LoginLink = function({ onClick }) {
    return (
        <div className="d-flex justify-content-center mt-4 mb-2">
            <a href="#" className="text-success create-account" onClick={onClick}>Already an user</a>
        </div>
    );
};

export default LoginLink;