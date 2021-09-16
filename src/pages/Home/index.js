import Header from "../../components/Header";
import Conexoes from "../../components/Conexoes";
import * as s from "./styles";
import Post from "../../components/Post";
import Fade from "react-reveal/Fade";

import { useEffect, useState} from 'react';
import { onFeedList } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const Home = () => {

  const { loggedUser } = useAuth();

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    if(loggedUser) {
      let unsub = onFeedList(setFeed);
      return unsub;
    }    
  }, [loggedUser]);

  return (
    <s.Container>
      <Conexoes />
      <div className="posts">
        <Fade>
          {feed.map((post) => {
            return (
              <Post key={post.key} post={post}/>
            );
          })}          
        </Fade>
      </div>
      <Header />
    </s.Container>
  );
};

export default Home;
