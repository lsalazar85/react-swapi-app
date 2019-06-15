import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./header.scss"

const Header = () => {
    return (
        <AppBar position="static" className="header-main">
            <Toolbar>
                <span>React Swapi App</span>
            </Toolbar>
        </AppBar>
    )
}

export default Header