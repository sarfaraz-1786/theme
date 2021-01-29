import React, { useContext } from "react";
import { ContextProvider } from "./App";
import { Para } from "./styleElement";
import { Link } from "react-router-dom";
import { Themediv } from "./styleElement";
export const Nav = () => {
    const [state, setState] = useContext(ContextProvider);
    const [style, setStyle] = useContext(ContextProvider);
    return (
        <Themediv  change={style}>
            <Link to="/">
                <h2>homepage</h2>
            </Link>
            <Para change={style}>
                Number of Objects in my State = {state.length}
            </Para>
        </Themediv>
    );
};
