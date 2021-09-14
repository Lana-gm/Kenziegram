import * as S from "./styles";

import Header from "../../components/Header";
import { useState } from "react";

import SearchGallery from "../../components/SearchGallery";
import CreatePost from "../../components/CreatePost";

const Postage = () => {
  const [isShow, setIsShow] = useState(true);

  const [image, setImage] = useState('https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1');
  const [file, setFile] = useState(null);

  return (
    <>
      <Header />
      {isShow ? (
        <SearchGallery setImage={setImage} setFile={setFile} isShow={isShow} setIsShow={setIsShow} />
      ) : (
        <CreatePost image={image} file={file} isShow={isShow} setIsShow={setIsShow} />
      )}
      <S.Info className="page">
        <S.InfoContent className="page-current" isShow={isShow}></S.InfoContent>
        <S.InfoContent
          className="page-current"
          isShow={!isShow}
        ></S.InfoContent>
      </S.Info>
    </>
  );
};

export default Postage;
