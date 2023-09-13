import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const EmailInput = function({ value, setValue }) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>
                <i className="bi bi-at"></i>
            </InputGroup.Text>
            <Form.Control defaultValue={value} onChange={(e) => setValue(e.target.value)} placeholder="Email"/>
        </InputGroup>
    );
};

export default EmailInput;