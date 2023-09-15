import React from "react";
import { Container, Row } from "react-bootstrap";
import InstructionItem from "./InstructionItem";

const InstructionsList = function({ instructions }) {
    return (
        <Container className="px-5 py-3 mb-2">
            {instructions.map(i => <InstructionItem key={i.id} instruction={i}/>)}
        </Container>
    );
};

export default InstructionsList;