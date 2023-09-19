import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const IngredientInput = function({ list, setList, index, onChange }) {
    const remove = function() {
        list.splice(index, 1);
        setList("ingredients", [...list]);
    };

    return (
        <InputGroup className="mb-3">
            <Form.Control defaultValue={list[index].description} onChange={(e) => onChange(e, index)} placeholder={ "Ingredient #" + (index + 1) }/>
            <Button variant="warning" onClick={remove}>
                <i className="bi bi-dash-lg"></i>
            </Button>
        </InputGroup>
    );
};

export default IngredientInput;