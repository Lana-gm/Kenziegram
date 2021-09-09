import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import ProfilePage from "../pages/Profile";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/register"></Route>
      <Route path="/home"></Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/search">
        
      </Route>
      <Route path="/profile">
          <ProfilePage />
      </Route>
      <Route path="/profile/:id"></Route>
      <Route path="/profile/edit"></Route>
    </Switch>
  );
};

export default Routes;
