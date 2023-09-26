import React, { useState } from "react";
import Layout from "../Layout";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import EmailInput from "../Components/EmailInput";
import PasswordInput from "../Components/PasswordInput";
import { router, useForm } from "@inertiajs/react";
import UsernameInput from "../Components/UsernameInput";
import ConfirmPasswordInput from "../Components/ConfirmPasswordInput";
import SaveAccountButton from "../Components/SaveAccountButton";
import LoginLink from "../Components/LoginLink";

function CreateAccount() {

    const { data, setData, post } = useForm({
        name: "",
        email: "",
        password: ""
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState(null);

    const createAccount = function() {
        setError(null);

        if(data.password == confirmPassword)
            post("/user/register", {
                onError: (postError) => {
                    if(postError.name)
                        setError(postError.name);
                    else if(postError.email)
                        setError(postError.email);
                    else if(postError.password)
                        setError(postError.password);
                    else setError("Unknown error. Please contact an administrator.");
                }
            });

        else setError("The passwords don't match.");
    };

    const login = function() {
        router.get("/user/connect");
    };

    return (
        <Container>
            <Row className="d-flex flex-row justify-content-center">
                <Col lg={6} className="border rounded-1 mt-3 pt-5 pb-4 px-4">
                    <Form>
                        {error != null && <Alert variant="danger" className="py-1">{error}</Alert>}
                        <UsernameInput value={data.name} setValue={setData}/>
                        <EmailInput value={data.email} setValue={setData}/>
                        <PasswordInput value={data.password} setValue={setData}/>
                        <ConfirmPasswordInput value={confirmPassword} setValue={setConfirmPassword}/>
                        <SaveAccountButton onClick={createAccount}/>
                        <LoginLink onClick={login}/>
                    </Form>
                </Col>
            </Row>
        </Container>
    );

}

CreateAccount.layout = page => <Layout children={page}/>

export default CreateAccount;