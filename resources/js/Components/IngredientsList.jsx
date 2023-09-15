import React from "react";
import '../../css/IngredientsList.css';

const IngredientsList = function({ ingredients }) {
    return (
        <p className="mb-3 px-4">
            <span className="fs-5">
                <span className="ingredients-list-title-only">Ingredients</span>
                <span className="mx-2">:</span>
            </span>
            {ingredients.map((i, index) => 
            <span key={i.id} className="ingredients-list-ingredients">
                {i.description}
                {(index < ingredients.length - 1) && <span className="me-1">,</span>}
            </span>)}
        </p>
    );
};

export default IngredientsList;