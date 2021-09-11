import Header from "../../components/Header";
import Storys from "../../components/Storys";
import * as s from "./styles";
import PostHome from "../../components/PostHome";

const Home = () => {
  return (
    <s.Container>
      <Storys />
      <div className="posts">
        <PostHome />
        <PostHome />
        <PostHome />
        <PostHome />
      </div>
      <Header />
    </s.Container>
  );
};

export default Home;
