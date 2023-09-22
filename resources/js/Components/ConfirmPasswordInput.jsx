import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const ConfirmPasswordInput = function({ value, setValue }) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>
                <i className="bi bi-check"></i>
            </InputGroup.Text>
            <Form.Control defaultValue={value} onChange={(e) => setValue(e.target.value)} type="password" placeholder="Confirm password"/>
        </InputGroup>
    );
};

export default ConfirmPasswordInput;