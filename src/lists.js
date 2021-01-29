import React, { useContext } from "react";
import { ContextProvider } from "./App";
import { Movies } from "./renderList";
import { Themediv } from "./styleElement";
import { Link } from "react-router-dom";
export const Lists = () => {
    const [state, setState] = useContext(ContextProvider);
    const [style, setStyle] = useContext(ContextProvider);
    return (
        <Themediv change={style}>
            <ul>
                <li>sarfaraz hi</li>
                <li>saiffi hi</li>
            </ul>
            <Link to="/">
                <h1>homepage</h1>
            </Link>
        </Themediv>
    );
};
