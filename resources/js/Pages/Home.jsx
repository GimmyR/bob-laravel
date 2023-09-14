import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import RecipeItem from "../Components/RecipeItem";

export default function Home({ recipes }) {

    return (
        <Container className="bg-light px-5 pt-4 pb-4 recipes-container">
            <Row>
                {recipes.map(r => <RecipeItem key={r.id} lg={3} recipe={r}/>)}
            </Row>
        </Container>
    );

}
