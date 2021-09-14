import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import * as s from "./style";
import Fade from "react-reveal/Fade";

const ProfilePage = () => {
  return (
    <s.Container>
      <Header />
      <Profile />
      <div className="posts">
        <Fade>
          <Post options="true" />
          <Post options="true" />
          <Post options="true" />
          <Post options="true" />
        </Fade>
      </div>
    </s.Container>
  );
};

export default ProfilePage;
