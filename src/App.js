import React, { useState, createContext } from "react";

export const ContextProvider = createContext();
export const MovieProvider = (props) => {
    const [state, setState] = useState([
        {
            id: 1,
            name: "sarfaraz",
            age: 5,
        },
        {
            id: 2,
            name: "saiffi",
            age: 22,
        },
    ]);
    const [style, setStyle] = useState(false);

    return (
        <ContextProvider.Provider
            value={[state, setState]}
            stylevalue={[style, setStyle]}
        >
            {props.children}
        </ContextProvider.Provider>
    );
};
