import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";
import '../../css/InstructionItem.css';

const InstructionItem = function({ instruction }) {
    const [check, setCheck] = useState(false);

    return (
        <Row>
            <div className="d-flex flex-row">
                <Form.Check type="checkbox" className="me-3" checked={check} onChange={() => setCheck(!check)}/>
                <p className={check ? "instruction-item-details-checked" : "instruction-item-details"}>{instruction.details}</p>
            </div>
        </Row>
    );
};

export default InstructionItem;