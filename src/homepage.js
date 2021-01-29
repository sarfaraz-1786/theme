import React,{useContext} from "react";
import {ContextProvider} from "./App"
import { Themebutton,Themediv } from "./styleElement";
import {Link} from "react-router-dom"

export const HomePage = () => {
    const [style,setStyle] = useContext(ContextProvider);
    const ChangeTheme = () => setStyle(!style);
    return (
        <Themediv change={style}>          
            <Themebutton change={style} onClick={ChangeTheme}> ChangeTheme </Themebutton>
            <h1> This is home HomePage </h1>
            <Link to='/movie'>
                <h1>page one</h1>
            </Link>  <Link to='/lists'>
                <h1>page two</h1>
            </Link>
        </Themediv>
    );
};
