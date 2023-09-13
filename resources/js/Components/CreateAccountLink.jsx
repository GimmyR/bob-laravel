import React from "react";
import '../../css/CreateAccountLink.css';

const CreateAccountLink = function({ createAccount }) {
    return (
        <div className="d-flex justify-content-center mt-4 mb-2">
            <a href="#" className="text-success create-account" onClick={createAccount}>Create account</a>
        </div>
    );
};

export default CreateAccountLink;