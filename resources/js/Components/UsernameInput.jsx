import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const UsernameInput = function({ value, setValue }) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>
                <i className="bi bi-person"></i>
            </InputGroup.Text>
            <Form.Control defaultValue={value} onChange={(e) => setValue("name", e.target.value)} placeholder="Username"/>
        </InputGroup>
    );
};

export default UsernameInput;