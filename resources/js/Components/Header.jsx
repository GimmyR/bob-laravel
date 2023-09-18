import React, { useEffect, useState } from "react";
import { Container, Form, Image, InputGroup, Nav, Navbar } from "react-bootstrap";
import "../../css/Header.css";
import ResetSearchButton from "./ResetSearchButton";
import AddRecipeNavLink from "./AddRecipeNavLink";
import NotificationNavLink from "./NotificationNavLink";
import AccountNavLink from "./AccountNavLink";
import AccountNavDropdown from "./AccountNavDropdown";
import LoginModal from "./LoginModal";
import { Link } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER } from "../store";

export default function Header() {

    const [showLoginModal, setShowLoginModal] = useState(false);

    const [search, setSearch] = useState("");

    const user = useSelector((state) => state.user);
    
    const dispatch = useDispatch();

    const getUser = function() {
        fetch("/user/auth")
            .then(response => response.json()
            .then(res => {
                if(res.data != null)
                    dispatch({ type: UPDATE_USER, payload: res.data });
            }).catch(error => console.log(error)));
    };

    const doSearch = function(event) {
        
    };

    const toHome = function() {
        
    };

    const createAccount = function() {



    };

    useEffect(() => getUser(), []);

    return (
        <>
            <Navbar bg="success" variant="dark" id="header">
                <Container fluid>
                    <Navbar.Brand>
                        <Link href="/" onClick={toHome} className="header-navbar-brand">
                            <Image src="/logo.png" className="header-navbar-brand-logo"/>
                        </Link>
                    </Navbar.Brand>
                    <Form className="d-flex col-lg-5" onSubmit={e => doSearch(e)}>
                        <InputGroup>
                            <Form.Control value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"/>
                            <ResetSearchButton onClick={() => setSearch("")}/>
                        </InputGroup>
                    </Form>
                    <Nav className="d-flex flex-row align-items-center">
                        <AddRecipeNavLink/>
                        <NotificationNavLink/>
                        {user == null
                        ? <AccountNavLink handleShow={() => setShowLoginModal(true)}/>
                        : <AccountNavDropdown user={user}/>}
                    </Nav>
                </Container>
            </Navbar>
            <LoginModal show={showLoginModal} handleClose={() => setShowLoginModal(false)} getUser={getUser} createAccount={createAccount}/>
        </>
    );

};