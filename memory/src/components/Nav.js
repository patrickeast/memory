import React from "react";
import "../App.css";
import logo from '../Nickelodeon.svg';


const Nav = props => (
    <nav>
        <ul className="navbar">
            <li>
                <img src={logo} className="App-logo" alt="logo" />
            </li>
            <li className={
                props.message.indexOf('incorrectly') !== -1 ?
                    "desc-incorrect" :
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{ color: "yellow" }}>{props.currentScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;