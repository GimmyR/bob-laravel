import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const InstructionInput = function({ list, setList, index, onChange }) {
    const remove = function() {
        list.splice(index, 1);
        setList("instructions", [...list]);
    };

    return (
        <InputGroup className="mb-3">
            <Form.Control defaultValue={list[index].details} onChange={(e) => onChange(e, index)} placeholder={ "Instruction #" + (index + 1) }/>
            <Button variant="warning" onClick={remove}>
                <i className="bi bi-dash-lg"></i>
            </Button>
        </InputGroup>
    );
};

export default InstructionInput;