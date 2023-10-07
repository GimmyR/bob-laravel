import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import RecipeItem from "../Components/RecipeItem";
import Layout from "../Layout";
import DownloadBanner from "../Components/DownloadBanner";

function Home({ recipes }) {

    return (
        <>
            <DownloadBanner/>
            <Container className="bg-light px-5 pt-4 pb-4 recipes-container">
                <Row>
                    {recipes.map(r => <RecipeItem key={r.id} lg={3} recipe={r}/>)}
                </Row>
            </Container>
        </>
    );

}

Home.layout = page => <Layout children={page}/>

export default Home;