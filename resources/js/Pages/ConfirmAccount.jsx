import React from "react";
import Layout from "../Layout";

const ConfirmAccount = function({ success, error }) {

    return (
        <div>
            <p>{success || error}</p>
        </div>
    );

};

ConfirmAccount.layout = page => <Layout children={page}/>

export default ConfirmAccount;