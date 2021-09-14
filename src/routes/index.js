import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import ProfilePage from "../pages/Profile";
import Search from "../pages/Search";
import ProfileSettings from "../pages/ProfileSettings";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Postage from "../pages/Postage";
import Recovery from "../pages/Recovery";
import ProfilePageId from "../pages/ProfileId";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/recovery">
        <Recovery />
      </Route>
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
      <Route path="/profile/:id">
        <ProfilePageId />
      </Route>
      <Route path="/profile-edit">
        <ProfileSettings />
      </Route>
    </Switch>
  );
};

export default Routes;
