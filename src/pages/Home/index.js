import Header from "../../components/Header";
import Conexoes from "../../components/Conexoes";
import * as s from "./styles";
import Post from "../../components/Post";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <s.Container>
      <Conexoes />
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
