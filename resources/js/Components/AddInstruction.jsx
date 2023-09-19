import React from "react";
import { Button } from "react-bootstrap";
import { getRandom } from "../helpers.js";
import InstructionInput from "./InstructionInput";

export function AddInstruction({ list, setList }) {
    const addInstruction = function() {
        list.push({ id: getRandom() });
        setList("instructions", [...list]);
    };

    const handleChange = function(e, index) {
        list[index].details = e.target.value;
        setList("instructions", [...list]);
    };

    return (
        <div className={`d-flex flex-column ${ list.length > 0 && "my-3" }`}>
            {list.map((item, index) => 
                <InstructionInput key={item.id} list={list} setList={setList} index={index} onChange={handleChange}/>
            )}

            <Button variant="secondary" onClick={addInstruction}>
                <i className="bi bi-plus-lg me-2"></i> Add Instruction
            </Button>
        </div>
    );
};