import * as S from "./styles";

import Header from "../../components/Header";
import { useState } from "react";

import SearchGallery from "../../components/SearchGallery";
import CreatePost from "../../components/CreatePost";

const Postage = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <S.Container>
      <Header />
      {isShow ? (
        <SearchGallery isShow={isShow} setIsShow={setIsShow} />
      ) : (
        <CreatePost isShow={isShow} setIsShow={setIsShow} />
      )}
      <S.Info className="page">
        <S.InfoContent className="page-current" isShow={isShow}></S.InfoContent>
        <S.InfoContent
          className="page-current"
          isShow={!isShow}
        ></S.InfoContent>
      </S.Info>
    </S.Container>
  );
};

export default Postage;
