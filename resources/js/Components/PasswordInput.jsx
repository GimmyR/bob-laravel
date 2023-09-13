import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const PasswordInput = function({ value, setValue }) {
    return (
        <InputGroup className="mb-3">
            <InputGroup.Text>
                <i className="bi bi-lock"></i>
            </InputGroup.Text>
            <Form.Control defaultValue={value} onChange={(e) => setValue(e.target.value)} type="password" placeholder="Password"/>
        </InputGroup>
    );
};

export default PasswordInput;