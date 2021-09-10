import Header from "../../components/Header";
import { useState } from "react";

import SearchGallery from "../../components/SearchGallery";
import CreatePost from "../../components/CreatePost";

const Postage = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Header />
      {isShow ? (
        <SearchGallery isShow={isShow} setIsShow={setIsShow} />
      ) : (
        <CreatePost isShow={isShow} setIsShow={setIsShow} />
      )}
    </>
  );
};

export default Postage;
