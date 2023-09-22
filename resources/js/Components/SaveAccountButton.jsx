import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const SaveAccountButton = function({ onClick }) {
    return (
        <Container>
            <Row className="pt-2">
                <Button variant="success" onClick={onClick}>Save account</Button>
            </Row>
        </Container>
    );
};

export default SaveAccountButton;