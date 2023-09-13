import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form, InputGroup, Modal, Row } from "react-bootstrap";
import '../../css/LoginModal.css';
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ForgotPasswordLink from "./ForgotPasswordLink";
import LoginButton from "./LoginButton";
import CreateAccountLink from "./CreateAccountLink";

const LoginModal = function({ show, handleClose, getUser, createAccount }) {

    const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);

    const [error, setError] = useState(null);

    const connect = function() {
        const data = { email: email, password: password };
        fetch("/user/login", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.json()
            .then(res => {
                if(!res.error) {
                    getUser();
                    handleClose();
                }
            }).catch(error => console.log(error)));
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