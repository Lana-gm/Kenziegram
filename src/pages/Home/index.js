import Header from "../../components/Header";
import Conexoes from "../../components/Conexoes";
import * as s from "./styles";
import Post from "../../components/Post";
import Fade from "react-reveal/Fade";
import { Redirect } from "react-router";

import { useEffect, useState } from "react";
import { onFeedList } from "../../firebaseApi";
import { useAuth } from "../../providers/Auth";

const Home = () => {
  const { loggedUser } = useAuth();

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    if (loggedUser) {
      let unsub = onFeedList(setFeed);
      return unsub;
    }
  }, [loggedUser]);

  if (!loggedUser) {
    return <Redirect to="/login" />;
  }

  return (
    <s.Container>
      <Conexoes />
      <div className="posts">
        {feed.map((post) => {
          return (
            <Fade>
              <Post key={post.key} post={post} />;
            </Fade>
          );
        })}
      </div>
      <Header />
    </s.Container>
  );
};

export default Home;
