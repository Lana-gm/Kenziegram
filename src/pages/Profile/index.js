import Header from "../../components/Header";
import * as s from "./style";
import { BsFillGearFill } from "react-icons/bs";

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <s.Container>
      <div>
        <BsFillGearFill
          className="icone-opcoes"
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
          <MenuItem onClick={handleClose}>Sair</MenuItem>
        </Menu>
      </div>
      <div className="cabecalho-informacoes">
        <img
          src="https://img.freepik.com/vetores-gratis/homem-perfil-caricatura_18591-58483.jpg?size=338&ext=jpg"
          alt="imagem do perfil"
        />
        <div className="informacoes">
          <p className="nome">Nome do usuário</p>
          <p className="bio">
            Estudante de desenvolvimento web na Kenzie Academy Brasil
          </p>
        </div>
      </div>
      <p className="numero-postagens">
        1000 <span>postagens</span>
      </p>
      <Header />
    </s.Container>
  );
};

export default Profile;
