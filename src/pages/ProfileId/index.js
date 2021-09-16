import Header from "../../components/Header";
import Profile from "../../components/Profile";

import * as S from "./style";

import PictureGallery from "../../components/PictureGallery";
import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { onPostList } from "../../firebaseApi";
import { useParams } from "react-router";
import { useAuth } from "../../providers/Auth";

const ProfilePageId = () => {
  const { id } = useParams();

  const { loggedUser } = useAuth();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (id && loggedUser) {
      let unsub = onPostList(setPosts, { uid: id });
      return () => {
        unsub();
      };
    }
  }, [id, loggedUser]);

  if (!loggedUser) {
    return <Redirect to="/login" />;
  }

  return (
    <S.Main>
      <S.Container>
        <Header />
        <Profile id={id} />
        <div className="picture__wrap">
          <div className="picture__container">
            {/* <Fade> */}
            {posts.map((post) => {
              return <PictureGallery post={post} />;
            })}
            {/* </Fade> */}
          </div>
        </div>
      </S.Container>
    </S.Main>
  );
};

export default ProfilePageId;
