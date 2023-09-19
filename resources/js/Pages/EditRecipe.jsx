import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { Alert, Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import { AddIngredient } from "../Components/AddIngredient";
import { AddInstruction } from "../Components/AddInstruction";

function EditRecipe({ recipe }) {

    const [error, setError] = useState(null);
    const [imagePath, setImagePath] = useState("/storage/" + recipe.image);

    const { data, setData, post } = useForm({
        title: recipe.title,
        image: null,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions
    });

    const setImage = function(value) {
        setData("image", value);
        setImagePath(null);
    };

    const saveRecipe = function() {
        setError(null);
        post("/edit-recipe/" + recipe.id, {
            onError: (err) => {
                if(err.title != undefined)
                    setError(err.title);
                else if(err.image != undefined)
                    setError(err.image);
                else setError("Unknown error. Contact an admin.");
            }
        });
    };

    return (
        <Container className="bg-light py-5 min-vh-100">
            <Row className="d-flex flex-column align-items-center">
                {error != null &&
                <Col lg={7} className="mb-1">
                    <Alert variant="danger" className="py-2">{error}</Alert>
                </Col>}
                <Col lg={7} className="mb-3">
                    <Form.Control defaultValue={data.title} onChange={(e) => setData("title", e.target.value)} placeholder="Recipe title"/>
                </Col>
                {(imagePath != null || data.image != null) &&
                <Col lg={7} className="mb-3">
                    <Image src={(imagePath || URL.createObjectURL(data.image))} fluid/>
                </Col>}
                <Col lg={7} className="mb-3">
                    <Form.Control type="file" defaultValue={data.image} onChange={(e) => setImage(e.target.files[0])}/>
                </Col>
                <Col lg={7} className="mb-3">
                    <AddIngredient list={data.ingredients} setList={setData}/>
                </Col>
                <Col lg={7} className="mb-3">
                    <AddInstruction list={data.instructions} setList={setData}/>
                </Col>
                <Col lg={7} className="d-flex flex-column mb-3">
                    <Button variant="success" onClick={saveRecipe}>
                        <i className="bi bi-save me-2"></i> Save Recipe
                    </Button>
                </Col>
            </Row>
        </Container>
    );

}

EditRecipe.layout = page => <Layout children={page}/>

export default EditRecipe;