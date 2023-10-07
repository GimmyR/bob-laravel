import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import "../../css/DownloadBanner.css";
import GooglePlayButton from "./GooglePlayButton";
import AppStoreButton from "./AppStoreButton";

const DownloadBanner = function() {
    return (
        <Container className="download-banner-container-fluid" fluid>
            <Container className="download-banner-container">
                <Row className="download-banner-row">
                    <Col lg={7} className="d-flex flex-column justify-content-center download-banner-text-buttons">
                        <div className="mb-3 download-banner-text">
                            <h1 className="text-uppercase text-center fw-bold">Download our app</h1>
                        </div>
                        <div className="d-flex flex-column align-items-center download-banner-buttons">
                            <GooglePlayButton/>
                            <AppStoreButton/>
                        </div>
                    </Col>
                    <Col lg={5} className="d-flex flex-row justify-content-start download-banner-image">
                        <div className="col-lg-9 banner-image"></div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DownloadBanner;