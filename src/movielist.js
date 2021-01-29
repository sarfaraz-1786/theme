import React from "react";
import { MovieProvider } from "./App";
import { Nav } from "./movie";
import { Lists } from "./lists";
import { HomePage } from "./homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export function App() {
    return (
        <MovieProvider>
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/movie" component={Nav} />
                        <Route path="/lists" component={Lists} />
                    </Switch>
                </div>
            </Router>
        </MovieProvider>
    );
}
