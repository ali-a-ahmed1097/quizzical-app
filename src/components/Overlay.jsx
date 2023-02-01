import React from "react";
import { category } from '../assets/categories';

export default function Overlay(props) {
    const [values, setValues] = React.useState({ cat: 8, diff: 0, type: 0 });

    const trivia = category.trivia.map((t, i) => <option key={i} value={i + 8} >{t}</option>);
    const difficulty = category.difficulty.map((d, i) => <option key={i} value={i} >{d}</option>);
    const type = category.type.map((t, i) => <option key={i} value={i} >{t}</option>);

    function handleChange(event) {
        const { name, value } = event.target;
        setValues(oldValues => (
            { ...oldValues, [name]: value }
        ));
    }

    function generateLink(event) {
        event.preventDefault();
        const c = (values.cat - 0) === 8 ? '' : `&category=${values.cat}`;
        const d = (values.diff - 0) ? `&difficulty=${category.difficulty[values.diff].toLowerCase()}` : '';
        let t = '';

        if (values.type - 0 === 1) t = '&type=multiple';
        else if (values.type - 0 === 2) t = '&type=boolean';

        const link = `https://opentdb.com/api.php?amount=5${c}${d}${t}`;

        console.log(link);
    }

    return (
        <div className="full-overlay"
            onClick={(event) => {
                event.preventDefault();
                if (event.target === event.currentTarget) props.display(false);
            }}
        >
            <div className="input-overlay">
                <form className="input-overlay" onSubmit={generateLink}>
                    <label htmlFor="cat">Select category:</label>
                    <select name="cat" onChange={handleChange} value={values.cat}> {trivia} </select>
                    <label htmlFor="diff">Select difficulty:</label>
                    <select name="diff" onChange={handleChange} value={values.diff}>{difficulty}</select>
                    <label htmlFor="type">Select type:</label>
                    <select name="type" onChange={handleChange} value={values.type}>{type}</select>
                    <button>Generate quiz</button>
                </form>
            </div>
        </div>
    );
}