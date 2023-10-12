import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const LoginButton = function() {
    return (
        <Container>
            <Row>
                <Button type="submit" variant="success" className="text-uppercase fw-bold">Login</Button>
            </Row>
        </Container>
    );
};

export default LoginButton;