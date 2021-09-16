import * as S from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { FiMoreHorizontal, FiArrowLeft } from "react-icons/fi";
import { BsFillGearFill } from "react-icons/bs";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const ModalGallery = ({ isShowModal, setIsShowModal, source, alt }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOptions = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete = () => {
    setAnchorEl(null);
  };

  const handleClickReturn = () => {
    console.log("return");
    setIsShowModal(!isShowModal);
  };

  const history = useHistory();

  //const handleEdit = () => {
  //  history.push("/profile-edit");
  //};

  return (
    <S.Display>
      <div className="container">
        <button className="container__btn" onClick={handleClickReturn}>
          <FiArrowLeft className="container__btn__return btn" />

          <AiOutlineClose className="container__btn__close btn" />
        </button>
        <div className="content">
          <div className="content__box">
            {/*<FiMoreHorizontal />*/}
            <FiMoreHorizontal
              className="box__btn-options btn"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClickOptions}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleDelete}
            >
              <MenuItem onClick={handleDelete}>Excluir</MenuItem>
            </Menu>
            <figure className="box__figure">
              <img className="box__figure__img" src={source} alt={alt} />
              <figcaption className="box__figure__figcaption">{alt}</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </S.Display>
  );
};

export default ModalGallery;
