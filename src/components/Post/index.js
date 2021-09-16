import * as s from "./style";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import PictureFrame from "../PictureFrame";

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const Post = ({ options = false, source = "", post }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <s.Container>
      {!!options && (
        <div>
          <HiDotsHorizontal
            className="icone-opicoes"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Editar</MenuItem>
            <MenuItem onClick={handleClose}>Excluir</MenuItem>
          </Menu>
        </div>
      )}
      <div className="informacoes">
        <img className="avatar"
          src="https://img.freepik.com/vetores-gratis/homem-perfil-caricatura_18591-58483.jpg?size=338&ext=jpg"
          alt="imagem do perfil"
        />
        <p className="nome">Kelvinho Mão de Código</p> {/* USER NAME AQUI */}
      </div>
      <div className="conteiner-publicacao">
        <p className="texto-publicacao"> {/* DESCRIÇÃO AQUI */}
          O pai tá on!
        </p>
      </div>
      <div className="picture__container"> {/* FOTO POSTADA AQUI */}
        <PictureFrame source="https://media-exp1.licdn.com/dms/image/C4E03AQGKw2lrXe5efA/profile-displayphoto-shrink_800_800/0/1624205145920?e=1637193600&v=beta&t=3KOWb0F-yFx4QYhDaq8B77aBkF76ZAkjcuJqG2xd-Ek" alt="uau" />
      </div>

    </s.Container>
  );
};

export default Post;
