import React from "react";
import { category } from '../assets/categories';

export default function Overlay() {
    
    const trivia = category.trivia.map((t, i) => <option key={i} value={i+8} >{t}</option>);
    const difficulty = category.difficulty.map((d, i) => <option key={i} value={i} >{d}</option>);
    const type = category.type.map((t, i) => <option key={i} value={i} >{t}</option>);

    return (
        <div className="full-overlay">
            <div className="input-overlay">
                <form className="input-overlay">
                    <label htmlFor="category">Select category:</label>
                    <select name="category"> {trivia} </select>
                    <label htmlFor="difficulty">Select difficulty:</label>
                    <select name="difficulty">{difficulty}</select>
                    <label htmlFor="type">Select type:</label>
                    <select name="type">{type}</select>
                </form>
            </div>
        </div>
    );
}