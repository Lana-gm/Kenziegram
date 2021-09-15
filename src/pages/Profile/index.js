import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Post from "../../components/Post";
import * as s from "./style";
import Fade from "react-reveal/Fade";
import PictureFrame from "../../components/PictureFrame";
import Kelvin from '../../assets/kelvin.jpg'

import { useEffect, useState} from 'react';
import { onPostList } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const ProfilePage = () => {

  const { loggedUser } = useAuth();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if(loggedUser) {
      let unsub = onPostList(setPosts, loggedUser);
      return unsub;
    }    
  }, [loggedUser]);

  return (
    <s.Main>
      <s.Container>
        <Header />
        <Profile />
        <div className="picture__wrap">
          <div className="picture__container">
            {/* <Fade> */}
            {posts.map((post) => {
              return (
                <PictureFrame source={post.img_url} alt="uau" /> 
              );
            })}
            {/* </Fade> */}
          </div>
        </div>
      </s.Container>
    </s.Main>
  );
};

export default ProfilePage;
