import React from "react";
import { Parser } from "html-to-react";
import { nanoid } from "nanoid";

export default function Question(props) {
    const HTRParser = new Parser();

    const answers = props.answers.map(answer => (
        <div
            key={nanoid()}
            className='answer'
            onClick={() => props.handleClick(props.id, answer)}
            style={
                props.disable
                ? 
                {
                    opacity: props.answer !== answer ? 0.5 : 1,
                    backgroundColor: (props.answer === answer) ? '#94D7A2' : ((answer === props.selected) ? '#F8BCBC' : '')
                }
                : { backgroundColor: props.selected === answer ? '#D6DBF5' : '' }
            }
        >
            {HTRParser.parse(answer)}
        </div>
    ));

    return (
        <div className="question-card">
            <div className="main-question">{HTRParser.parse(props.main)}</div>
            <div className="answers">{answers}</div>
            <hr />
        </div>
    );
}