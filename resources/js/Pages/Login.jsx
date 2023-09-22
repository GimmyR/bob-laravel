import React, { useState } from "react";
import Layout from "../Layout";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";
import ForgotPasswordLink from "../Components/ForgotPasswordLink";
import LoginButton from "../Components/LoginButton";
import CreateAccountLink from "../Components/CreateAccountLink";
import { router, useForm } from "@inertiajs/react";
import { useDispatch } from "react-redux";
import { UPDATE_USER } from "../store";

function Login() {

    const dispatch = useDispatch();

    const { data, setData, post } = useForm({
        email: "",
        password: ""
    });

    const [error, setError] = useState(null);

    const getUser = function() {
        fetch("/user/auth")
            .then(response => response.json()
            .then(res => {
                if(res.data != null)
                    dispatch({ type: UPDATE_USER, payload: res.data});
            }).catch(error => console.log(error)));
    };

    const connect = function() {
        setError(null);
        post("/user/login", {
            onSuccess: () => getUser()
        });
    };

    const createAccount = function() {
        router.get("/user/create-account");
    };

    return (
        <Container>
            <Row className="d-flex flex-row justify-content-center">
                <Col lg={6} className="border rounded-1 mt-3 pt-5 pb-4 px-4">
                    <Form>
                        {error != null && <Alert variant="danger" className="py-1">{error}</Alert>}
                        <EmailInput value={data.email} setValue={setData}/>
                        <PasswordInput value={data.password} setValue={setData}/>
                        <ForgotPasswordLink/>
                        <LoginButton onClick={connect}/>
                        <CreateAccountLink createAccount={createAccount}/>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

Login.layout = page => <Layout children={page}/>

export default Login;