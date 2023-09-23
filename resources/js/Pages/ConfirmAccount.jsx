import React from "react";
import Layout from "../Layout";
import { Alert, Col, Container, Row } from "react-bootstrap";

const ConfirmAccount = function({ success, error }) {

    return (
        <Container className="mt-3">
            <Row className="d-flex flex-row justify-content-center">
                <Col lg={6}>
                    {success != null && <Alert variant="success">{success}</Alert>}
                    {error != null && <Alert variant="danger">{error}</Alert>}
                </Col>
            </Row>
        </Container>
    );

};

ConfirmAccount.layout = page => <Layout children={page}/>

export default ConfirmAccount;