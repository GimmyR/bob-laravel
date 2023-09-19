import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import IngredientInput from "./IngredientInput";
import { getRandom } from "../helpers.js";

export function AddIngredient({ list, setList }) {
    const addIngredient = function() {
        list.push({ id: getRandom() });
        setList("ingredients", [...list]);
    };

    const handleChange = function(e, index) {
        list[index].description = e.target.value;
        setList("ingredients", [...list]);
    };

    return (
        <div className={`d-flex flex-column ${ list.length > 0 && "mt-3" }`}>
            {list.map((item, index) => 
                <IngredientInput key={item.id} list={list} setList={setList} index={index} onChange={handleChange}/>
            )}

            <Button variant="secondary" onClick={addIngredient}>
                <i className="bi bi-plus-lg me-2"></i> Add Ingredient
            </Button>
        </div>
    );
};