import * as S from "./styles.js";
import { useState } from "react";
import ModalGallery from "../ModalGallery";

const PictureFrame = ({ post }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      <S.Link onClick={() => setIsShowModal(!isShowModal)}>
        <figure className="picture__frame">
          <img className="picture" src={post.img_url} alt={post.description} />
        </figure>
      </S.Link>
      {isShowModal && (
        <ModalGallery
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          post={post}
        />
      )}
    </>
  );
};

export default PictureFrame;
