import * as S from "./styles";

import Header from "../../components/Header";
import { useState } from "react";
import { Redirect } from "react-router-dom";

import SearchGallery from "../../components/SearchGallery";
import CreatePost from "../../components/CreatePost";

import { useAuth } from "../../providers/Auth";

const Postage = () => {
  const [isShow, setIsShow] = useState(true);

  const [image, setImage] = useState(
    "https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"
  );
  const [file, setFile] = useState(null);

  const { loggedUser } = useAuth();

  if (!loggedUser) {
    return <Redirect to="/login" />;
  }

  return (
    <S.Container>
      <Header />
      {isShow ? (
        <SearchGallery
          file={file}
          setImage={setImage}
          setFile={setFile}
          isShow={isShow}
          setIsShow={setIsShow}
        />
      ) : (
        <CreatePost
          image={image}
          file={file}
          setFile={setFile}
          isShow={isShow}
          setIsShow={setIsShow}
        />
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
