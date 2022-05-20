import React from "react";
import "./App.css";
import Main from "./components/Main";
import logo from "./images/Spottabl.jpeg";

function App() {
    return (
        <React.Fragment>
            <header className="header">
                <img src={logo} alt="logo" className="header__logo" />
                <div className="header__title-wrapper">
                    <h3 className="header__title">YOUR SPOTTABL TEAM</h3>
                    <span className="header__sub-title">
                        Spottabl supports you all throughout
                    </span>
                </div>
            </header>
            <Main />
        </React.Fragment>
    );
}

export default App;
