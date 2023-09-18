import { router } from "@inertiajs/react";
import React from "react";
import { Nav } from "react-bootstrap";

const AddRecipeNavLink = function() {
    
    const handleClick = function() {
        router.get("/add-recipe");
    };

    return (
        <Nav.Link href="#" onClick={handleClick}>
            <i className="bi bi-plus-circle fs-3"></i>
        </Nav.Link>
    );
    
};

export default AddRecipeNavLink;