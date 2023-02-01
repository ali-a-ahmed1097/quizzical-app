import React from "react";

export default function Home(props) {
    return (
        <div className="home">
            <h1>Quizzical</h1>
            <h3>A quiz taking app</h3>
            <button onClick={props.generateQuiz}>Start quiz</button>
        </div>
    );
}