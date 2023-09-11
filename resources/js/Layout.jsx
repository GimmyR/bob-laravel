import React from "react";

export default function Layout({ children }) {

    return (
        <>
            <div>
                <p>Header</p>
            </div>

            <div>{children}</div>
        </>
    );

}
