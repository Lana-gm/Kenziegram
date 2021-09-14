import * as s from "./style";
import { BsFillGearFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";

import { db } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const Profile = () => {
  
  const { loggedUser } = useAuth();

  const [userData, setUserData] = React.useState({});
  let docRef = {};

  React.useEffect(() => {
    if (loggedUser !== null) {
      docRef = db.collection('Users').doc(loggedUser.uid);

      docRef.get().then((doc) => {
        setUserData(doc.data());
      });
    }
  }, [loggedUser]);

  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    history.push("/profile-edit");
  };

  return (
    <s.Container>
      <s.Content>
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
          <BsPencilSquare className="icone-editar" onClick={handleEdit} />
          <img
            src="https://img.freepik.com/vetores-gratis/homem-perfil-caricatura_18591-58483.jpg?size=338&ext=jpg"
            alt="imagem do perfil"
          />
          <div className="informacoes">
            <p className="nome">{userData.user}</p>
            <p className="bio">
              {userData.bio}
            </p>
          </div>
        </div>
        <p className="numero-postagens">
          {userData.posts} <span>postagens</span>
        </p>
      </s.Content>
    </s.Container>
  );
};

export default Profile;
