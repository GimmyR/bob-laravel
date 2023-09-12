import React from "react";
import { Button, Modal } from "react-bootstrap";

const ConfirmModal = function({ title, body, show, setShow, onConfirm }) {
    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center">
                <p className="mt-3">{body}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setShow(false)} variant="secondary" className="col-lg-3">No</Button>
                <Button onClick={onConfirm} variant="danger" className="col-lg-3">Yes</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModal;