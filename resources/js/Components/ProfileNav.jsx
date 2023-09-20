import React, { useState } from "react";
import { Col } from "react-bootstrap";
import '../../css/ProfileNav.css';
import { Link } from "@inertiajs/react";

const ProfileNav = function({ getMyRecipes, getMyFavorites }) {
    const [active, setActive] = useState({ myRecipes: true, myFavorites: false });

    const clickMyRecipes = function() {
        active.myRecipes = true;
        active.myFavorites = false;
        setActive({...active});
        getMyRecipes();
    };

    const clickMyFavorites = function() {
        active.myRecipes = false;
        active.myFavorites = true;
        setActive({...active});
        getMyFavorites();
    };

    return (
        <>
            <Col className="d-flex justify-content-center">
                <a href="#" onClick={clickMyRecipes} className={`text-dark fs-3 px-2 profile-nav-link ${active.myRecipes && "profile-nav-link-active"}`}>My recipes</a>
            </Col>
            <Col className="d-flex justify-content-center">
                <a href="#" onClick={clickMyFavorites} className={`text-dark fs-3 px-2 profile-nav-link ${active.myFavorites && "profile-nav-link-active"}`}>My favorites</a>
            </Col>
        </>
    );
};

export default ProfileNav;