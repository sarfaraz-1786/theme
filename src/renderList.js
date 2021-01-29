import React from "react";
import { Para } from "./styleElement";

export const Movies = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    );
};
