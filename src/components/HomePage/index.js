import React from "react";

const HomePage = ({ title, episode, director }) => {
    return (
        <div className="home-page-card">
            <div>
                <span>Title : <span>{title}</span> </span>
            </div>
            <div>
                <span>Episode : <span>{episode}</span> </span>
            </div>
            <div>
                <span>Director : <span>{director}</span> </span>
            </div>
        </div>
    )
}

export default HomePage