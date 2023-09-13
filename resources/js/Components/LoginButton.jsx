import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const LoginButton = function({ onClick }) {
    return (
        <Container>
            <Row>
                <Button onClick={onClick} variant="success" className="text-uppercase fw-bold">Login</Button>
            </Row>
        </Container>
    );
};

export default LoginButton;