import * as s from "./style";
import { BsFillGearFill } from "react-icons/bs";
import { GoGear } from "react-icons/go";
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";

import { db } from "../../firebaseApi";
import { useAuth } from "../../providers/Auth";

import { firebaseApp } from "../../firebaseApi";

const Profile = ({ id = null, self = false }) => {
  const { loggedUser, setLoggedUser } = useAuth();

  const [userData, setUserData] = React.useState({});

  const getUser = (loggedUser, id) => {
    let docRef = {};
    if (loggedUser !== null && !!id === false) {
      docRef = db.collection("Users").doc(loggedUser.uid);
      docRef.get().then((doc) => {
        setUserData(doc.data());
      });
    } else if (loggedUser !== null && !!id === true) {
      docRef = db.collection("Users").doc(id);
      docRef.get().then((doc) => {
        setUserData(doc.data());
      });
    }
  };

  React.useEffect(() => {
    getUser(loggedUser, id);
  }, [loggedUser, id]);

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

  const handleLogOut = () => {
    firebaseApp.auth().signOut();
    setLoggedUser(null);
    history.push("/");
  };

  return (
    <s.Container>
      <s.Content>
        {self && (
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
              <MenuItem onClick={handleEdit}>Editar</MenuItem>
              <MenuItem onClick={handleLogOut}>Sair</MenuItem>
            </Menu>
          </div>
        )}
        <div className="cabecalho-informacoes">
          <img src={userData.img_url} alt="imagem do perfil" />
          <div className="informacoes">
            <div className="name__divider">
              <div>
                <p className="nome">{userData.user}</p>
              </div>
              {self && (
                <button className="icone-editar" onClick={handleEdit}>
                  <span className="engrena">
                    <GoGear />
                  </span>{" "}
                  Editar Perfil
                </button>
              )}
            </div>
            <p className="bio">{userData.bio}</p>
            <div className="numero__container">
              <p className="numero-postagens">
                {userData.posts} <span>Publicações</span>
              </p>
            </div>
          </div>
        </div>
      </s.Content>
    </s.Container>
  );
};

export default Profile;
