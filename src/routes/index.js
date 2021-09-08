import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Landing/>
            </Route>
            <Route path="/register">
            </Route>
            <Route path="/home">

            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/profile">

            </Route>
            <Route path="/profile/:id">

            </Route>
            <Route path="/profile/edit">

            </Route>

        </Switch>
    );
};

export default Routes;
