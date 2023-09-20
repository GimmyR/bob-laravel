import React from "react";
import { Image } from "react-bootstrap";
import '../../css/ProfilePicture.css';

const ProfilePicture = function({ user }) {
    return (
        <div className="bg-secondary rounded-circle d-flex justify-content-center align-items-center profile-picture-container">
            {user.userImage != null ?
                <Image src={"/storage/" + user.image} fluid/>
            :
                <span className="text-light profile-picture-initial">{user.name.charAt(0).toUpperCase()}</span>
            }
        </div>
    );
};

export default ProfilePicture;