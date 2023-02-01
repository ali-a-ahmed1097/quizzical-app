import React from "react";
import htmlToReact, { Parser } from "html-to-react";

export default function Question(props) {
    const HTRParser = new Parser();

    return <div>{HTRParser.parse(props.main)}</div>
}