import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import TodoComponent from "./components/Todo";
import Profile from "./components/Profile";
import {Shop} from "./components/Shop/Shop";
import {Cart2} from "./components/Cart2/Cart2";
import {Login} from "./components/Auth/Login";
import User from "./containers/Users";

const Routes: React.SFC = () => (
    <div>
        <Switch>
            <Route exact path="/" render={() => ( <Navbar><HomePage/></Navbar>)} />
            <Route path="/cart" render={() => ( <Navbar><Cart/></Navbar>)} />
            <Route path="/todo" render={() => ( <Navbar><TodoComponent/></Navbar>)} />

            <Route path="/profile" render={() => ( <Navbar><Profile name={"Fadli"} username={"fadlikadn"} age={28}/></Navbar>)} />

            <Route path="/shop" render={() => ( <Navbar><Shop/></Navbar>)} />
            <Route path="/cart2" render={() => ( <Navbar><Cart2/></Navbar>)} />
            <Route path="/login" render={() => ( <Navbar><Login/></Navbar>)}/>
            <Route path="/user" render={() => ( <Navbar><User/></Navbar>)}/>

        </Switch>
    </div>
);

export default Routes;