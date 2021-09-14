import Header from "../../components/Header";
import Storys from "../../components/Storys";
import * as s from "./styles";
import Post from "../../components/Post";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <s.Container>
      <Storys />
      <div className="posts">
        <Fade>
          <Post />
          <Post />
          <Post />
          <Post />
        </Fade>
      </div>
      <Header />
    </s.Container>
  );
};

export default Home;
