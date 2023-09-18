import React from "react";
import Layout from "../Layout";

function AddRecipe() {

    return (
        <div>
            <p>Ajouter recette !</p>
        </div>
    );

}

AddRecipe.layout = page => <Layout children={page}/>

export default AddRecipe;