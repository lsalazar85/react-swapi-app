import React from "react";

const Characters = ({ name, eyes, gender }) => {
    return (
        <div className="character-card">
            <div>
                <span>Name: <span>{name}</span> </span>
            </div>
            <div>
                <span>Eyes: <span>{eyes}</span> </span>
            </div>
            <div>
                <span>Gender: <span>{gender}</span> </span>
            </div>
        </div>
    )
}

export default Characters