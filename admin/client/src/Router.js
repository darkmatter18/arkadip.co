import React from "react";
import {BrowserRouter, Route } from "react-router-dom";
import {DASHBOARD, HOME, LOGIN} from "./routes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import {PrivateRoute} from "./JWT";

const Router = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Route path={HOME} component={Home} exact/>
                <Route path={LOGIN} component={Login} exact/>
                <PrivateRoute path={DASHBOARD} component={Dashboard} loginPath={LOGIN} exact />
            </BrowserRouter>
        </React.Fragment>
    )
}

export default Router;