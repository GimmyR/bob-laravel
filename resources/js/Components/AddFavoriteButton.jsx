import React, { useEffect, useState } from "react";
import '../../css/AddFavoriteButton.css';

const AddFavoriteButton = function({ recipe, onClick, isFavorite, setIsFavorite }) {
    const getAdded = function() {
        
    };

    useEffect(() => getAdded(), []);

    return (
        <a href="#" onClick={onClick} className="add-favorite-button">
            <i className={`bi fs-4 ${isFavorite ? "bi-heart-fill text-success-2" : "bi-heart text-primary-2"}`}></i>
        </a>
    );
};

export default AddFavoriteButton;