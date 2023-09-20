import React, { useEffect, useState } from "react";
import '../../css/AddFavoriteButton.css';
import axios from "axios";

const AddFavoriteButton = function({ recipe, onClick, isFavorite, setIsFavorite }) {
    const getAdded = function() {
        axios.get("/is-favorite/" + recipe.id)
            .then(response => {
                if(!response.data.error)
                    setIsFavorite(response.data.data);
            }).catch(error => console.log("ERROR: ", error));
    };

    useEffect(() => getAdded(), []);

    return (
        <a href="#" onClick={onClick} className="add-favorite-button">
            <i className={`bi fs-4 ${isFavorite ? "bi-heart-fill text-success-2" : "bi-heart text-primary-2"}`}></i>
        </a>
    );
};

export default AddFavoriteButton;