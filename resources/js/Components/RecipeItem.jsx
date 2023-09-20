import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import '../../css/RecipeItem.css';
import AddFavoriteButton from "./AddFavoriteButton";
import { Link } from "@inertiajs/react";
import axios from "axios";

const RecipeItem = function({ lg, recipe, hideAuthor }) {
    
    const [isFavorite, setIsFavorite] = useState(false);

    const addFavorite = function() {
        axios.get("/" + (isFavorite ? "remove-favorite" : "add-favorite") + "/" + recipe.id)
            .then(response => {
                if(!response.data.error)
                    setIsFavorite(!isFavorite);
                else console.log(response.data.message);
            }).catch(error => console.log("ERROR: ", error));
    };

    return (
        <Col lg={lg} className="p-3">
            <div className="shadow bg-light">
                <div className="d-flex flex-column">
                    <Link href={"/recipe/" + recipe.id} className="recipe-item-link" title={recipe.title}>
                        <div className="py-2 px-3 text-truncate">
                            <span className="text-success fw-bold recipe-item-title">{recipe.title}</span>
                        </div>
                        <Image src={"/storage/" + recipe.image} fluid/>
                    </Link>
                    <Row className="px-4 py-1">
                        <Col className="pt-1">
                            <AddFavoriteButton recipe={recipe} onClick={addFavorite} isFavorite={isFavorite} setIsFavorite={setIsFavorite}/>
                        </Col>
                        {!hideAuthor && <Col className="d-flex flex-row justify-content-end align-items-center">
                            <span className="recipe-item-by me-2">by</span>
                            <Link href="#" className="recipe-item-author">{recipe.user.name}</Link>
                        </Col>}
                    </Row>
                </div>
            </div>
        </Col>
    );
};

export default RecipeItem;