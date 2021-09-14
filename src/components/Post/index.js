import * as s from "./style";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export const Post = ({ options = false }) => {
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
        <img
          src="https://img.freepik.com/vetores-gratis/homem-perfil-caricatura_18591-58483.jpg?size=338&ext=jpg"
          alt="imagem do perfil"
        />
        <p className="nome">Nome do usuário</p>
      </div>
      <div className="conteiner-publicacao">
        <p className="texto-publicacao">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words
        </p>
      </div>
      <div className="conteiner-curtidas">
        <AiFillLike className="icone-curtir" />
        <p className="curtidas">5</p>
      </div>
    </s.Container>
  );
};

export default Post;
