import * as S from "./styles.js";
import { useState } from "react";
import ModalGallery from "../ModalGallery";

const PictureFrame = ({ source, alt }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <S.Link onClick={() => setIsShowModal(!isShowModal)}>
        <figure className="picture__frame">
          <img className="picture" src={source} alt={alt} />
        </figure>
      </S.Link>
      {isShowModal && (
        <ModalGallery
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          source={source}
          alt={alt}
        />
      )}
    </>
  );
};

export default PictureFrame;
