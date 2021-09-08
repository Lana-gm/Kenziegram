import { Switch, Route } from "react-router-dom";
const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">

            </Route>
            <Route path="/register">
            </Route>
            <Route path="/home">

            </Route>
            <Route path="/login">

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
