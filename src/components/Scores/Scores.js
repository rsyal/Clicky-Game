import React from "react";
import "./Scores.css";

const Scores = (props) => (
    <div className="scores">
        {/* <h1>Make some friends</h1>
        <h2 className="message">{props.message}</h2> */}
        {/* <h3 className="score">Your Score: {props.score} </h3> */}
    </div>
);

export default Scores;



const Scoreboard = (props) => (
    <div className="gameScore">
        <h2 className="message">{props.message}</h2>
        <h3 className="score">Your Score: {props.score} <span className="score topscore italicStyle"> (Top Score: {props.topscore})</span></h3>
    </div>
);

