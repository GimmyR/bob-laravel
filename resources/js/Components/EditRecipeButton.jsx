import { Link } from "@inertiajs/react";
import React from "react";

const EditRecipeButton = function({ recipe }) {
    return (
        <Link href="#" className="mb-2">
            <i className="bi bi-pencil-square fs-5 text-dark"></i>
        </Link>
    );
};

export default EditRecipeButton;