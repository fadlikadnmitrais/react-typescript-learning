import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import TodoComponent from "./components/Todo";

const Routes: React.SFC = () => (
    <div>
        <Switch>
            <Route exact path="/" render={() => ( <Navbar><HomePage/></Navbar>)} />
            {/*<Route exact path="/">*/}
            {/*    <Navbar><HomePage/></Navbar>*/}
            {/*</Route>*/}
            <Route path="/cart" render={() => ( <Navbar><Cart/></Navbar>)} />
            {/*<Route path="/cart">*/}
            {/*    <Navbar><Cart/></Navbar>*/}
            {/*</Route>*/}
            <Route path="/todo" render={() => ( <Navbar><TodoComponent/></Navbar>)} />
            {/*<Route path="/todo">*/}
            {/*    <Navbar><TodoComponent/></Navbar>*/}
            {/*</Route>*/}
        </Switch>
    </div>
);

export default Routes;