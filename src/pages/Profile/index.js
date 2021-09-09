import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import * as s from "./style";

const ProfilePage = () => {
  return (
    <s.Container>
      <Header />
      <Profile />
      <div className="posts">
      <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </s.Container>
  );
};

export default ProfilePage;
