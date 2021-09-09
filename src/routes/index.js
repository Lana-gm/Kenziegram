import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Search from "../pages/Search";
import Register from "../pages/Register";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/home"></Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/profile"></Route>
      <Route path="/profile/:id"></Route>
      <Route path="/profile/edit"></Route>
    </Switch>
  );
};

export default Routes;
