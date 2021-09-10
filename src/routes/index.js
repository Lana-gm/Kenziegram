import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import ProfilePage from "../pages/Profile";
import Search from "../pages/Search";
import ProfileSettings from "../pages/ProfileSettings";
import Register from "../pages/Register";
import Postage from "../pages/Postage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home"></Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/postage">
        <Postage />
      </Route>
      <Route path="/profile">
        <ProfilePage />
      </Route>
      <Route path="/profile/:id"></Route>
      <Route path="/profile-edit">
        <ProfileSettings />
      </Route>
    </Switch>
  );
};

export default Routes;
