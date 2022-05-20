import React from "react";
import { getFirstNameLastNameCharacter } from "../utils";

const Image = ({ content }) => {
    return (
        <div className="user-image">
            <span>{getFirstNameLastNameCharacter(content)}</span>
        </div>
    );
};

export default Image;
