import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import '../../css/LoginModal.css';
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ForgotPasswordLink from "./ForgotPasswordLink";
import LoginButton from "./LoginButton";
import CreateAccountLink from "./CreateAccountLink";
import axios from "axios";

const LoginModal = function({ show, handleClose, getUser, createAccount }) {

    const [error, setError] = useState(null);

    const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);

    const connect = function() {
        setError(null);
        // AXIOS GRANTS TO SIMPLY MANAGE CSRF TOKEN
        axios.post("/user/login", {
            email: email,
            password: password
        }).then(response => {
                if(!response.data.error)
                    window.location.reload(false);
                else if(response.data.message != null)
                    setError(response.data.message);
            }).catch(error => {
                if(error.response.data.message != undefined)
                    setError(error.response.data.message);
            });
    };

    useEffect(() => {
        setError(null);
        setEmail(null);
        setPassword(null);
    }, [show]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>User Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {error != null && <Alert variant="danger" className="py-1">{error}</Alert>}
                    <EmailInput value={email} setValue={setEmail}/>
                    <PasswordInput value={password} setValue={setPassword}/>
                    <ForgotPasswordLink/>
                    <LoginButton onClick={connect}/>
                    <CreateAccountLink createAccount={createAccount}/>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginModal;