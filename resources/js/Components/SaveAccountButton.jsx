import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const SaveAccountButton = function() {
    return (
        <Container>
            <Row className="pt-2">
                <Button variant="success" type="submit">Save account</Button>
            </Row>
        </Container>
    );
};

export default SaveAccountButton;