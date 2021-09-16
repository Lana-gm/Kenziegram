import Header from "../../components/Header";
import Profile from "../../components/Profile";
import * as s from "./style";
import PictureFrame from "../../components/PictureFrame";

import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { onPostList } from "../../firebaseApi";
import { useAuth } from "../../providers/Auth";

const ProfilePage = ({ self = false }) => {
  const { loggedUser } = useAuth();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (loggedUser) {
      let unsub = onPostList(setPosts, loggedUser);
      return unsub;
    }
  }, [loggedUser]);

  if (!loggedUser) {
    return <Redirect to="/login" />;
  }

  return (
    <s.Main>
      <s.Container>
        <Header />
        <Profile self={self} />
        <div className="picture__wrap">
          <div className="picture__container">
            {posts.map((post) => (
              <PictureFrame source={post.img_url} alt="uau" />
            ))}
          </div>
        </div>
      </s.Container>
    </s.Main>
  );
};

export default ProfilePage;
