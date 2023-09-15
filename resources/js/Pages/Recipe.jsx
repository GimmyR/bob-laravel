import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../../css/Recipe.css";
import IngredientsList from "../Components/IngredientsList";
import InstructionsList from "../Components/InstructionsList";
import { Link } from "@inertiajs/react";
import EditRecipeButton from "../Components/EditRecipeButton";

function Recipe({ recipe, user }) {
    
    return (
        <Container className="bg-light px-5 pt-5 pb-5 min-vh-100">
            <Row>
                {recipe.image != null &&
                <Col lg={3}>
                    <Image src={"/" + recipe.image} fluid/>
                </Col>}
                <Col lg={9} className="d-flex flex-column">
                    <h1 className="text-success mb-3 d-flex flex-row align-items-center recipe-title">
                        <span className="me-3">{recipe.title}</span>
                        {user != null && user.id == recipe.user.id && <EditRecipeButton recipe={recipe}/>}
                    </h1>
                    <IngredientsList ingredients={recipe.ingredients}/>
                    <span className="fs-5 px-4 mb-2">
                        <span className="recipe-instructions-title-only">Instructions</span> :
                    </span>
                    <InstructionsList instructions={recipe.instructions}/>
                    <h5 className="d-flex flex-row justify-content-end align-items-center pe-2 recipe-by-author">
                        <span className="fst-italic me-2 recipe-by">by</span>
                        <Link href="#" className="recipe-author">{recipe.user.name}</Link>
                    </h5>
                </Col>
            </Row>
        </Container>
    );

}

Recipe.layout = page => <Layout children={page}/>

export default Recipe;