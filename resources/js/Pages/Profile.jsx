import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import RecipeItem from "../Components/RecipeItem";
import FavoriteItem from "../Components/FavoriteItem";
import ProfilePicture from "../Components/ProfilePicture";
import ProfileNav from "../Components/ProfileNav";
import axios from "axios";

function Profile({ user, auth }) {

    const [recipes, setRecipes] = useState([]);

    const [favorites, setFavorites] = useState([]);

    const getMyRecipes = function() {
        axios.get("/recipes/" + user.id)
            .then(response => {
                if(!response.data.error) {
                    setRecipes(response.data.data);
                    setFavorites([]);
                } else console.log(response.data.message);
            }).catch(error => console.log("ERROR: ", error));
    };

    const getMyFavorites = function() {
        axios.get("/favorites/" + user.id)
            .then(response => {
                if(!response.data.error) {
                    setRecipes([]);
                    setFavorites(response.data.data);
                } else console.log(response.data.message);
            }).catch(error => console.log("ERROR: ", error));
    };

    const removeFromFavorites = function(index) {
        favorites.splice(index, 1);
        setFavorites([...favorites]);
    };

    useEffect(() => getMyRecipes(), [auth]);

    return (
        <Container className="bg-light py-5 min-vh-100">
            {user != null && <Row className="mb-4">
                <Col lg={2} className="d-flex justify-content-center align-items-center">
                    <ProfilePicture user={user}/>
                </Col>
                <Col lg={10} className="d-flex align-items-center">
                    <div className="d-flex flex-column mb-3">
                        <h1 className="d-block">{user.name}</h1>
                        {(auth != null && auth.id == user.id)
                        ? <Button variant="secondary" className="fs-4">Settings</Button>
                        : <Button variant="primary" className="fs-4">Follow</Button>
                        }
                    </div>
                </Col>
            </Row>}
            {(auth != null && user != null && auth.id == user.id) &&
            <Row className="mb-5">
                <ProfileNav getMyRecipes={getMyRecipes} getMyFavorites={getMyFavorites}/>
            </Row>}
            <Row className="px-4">
                {recipes.map(r => <RecipeItem key={r.id} lg={3} recipe={r} hideAuthor={true}/>)}
                {favorites.map((f, index) => <FavoriteItem key={f.id} lg={3} recipe={f.recipe} remove={() => removeFromFavorites(index)}/>)}
            </Row>
        </Container>
    );
};

Profile.layout = page => <Layout children={page}/>

export default Profile;