import React from "react";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Layout({ children }) {

    return (
        <Provider store={store}>
            <Header/>
            {children}
        </Provider>
    );

}
