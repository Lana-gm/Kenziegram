import * as s from "./style";
import { HiDotsHorizontal } from "react-icons/hi";
import { AiFillLike } from "react-icons/ai";
import PictureFrame from "../PictureFrame";

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { db } from "../../firebaseApi";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";

export const Post = ({ options = false, source = "", post }) => {
  const { loggedUser } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [user, setUser] = useState([]);

  useEffect(() => {
    if (loggedUser) {
      let unsub = db
        .collection("Users")
        .doc(post.user_id)
        .get()
        .then((doc) => {
          setUser(doc.data());
        });
      return unsub;
    }
  }, [loggedUser]);

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
      {user !== undefined && (
        <div className="informacoes">
          <img className="avatar" src={user.img_url} alt="imagem do perfil" />
          <p className="nome">{user.user}</p> {/* USER NAME AQUI */}
        </div>
      )}
      {post !== undefined && (
        <>
          <div className="conteiner-publicacao">
            <p className="texto-publicacao">
              {" "}
              {/* DESCRIÇÃO AQUI */}
              {post.description}
            </p>
          </div>
          <div className="picture__container">
            {" "}
            {/* FOTO POSTADA AQUI */}
            <PictureFrame source={post.img_url} alt="uau" />
          </div>
        </>
      )}
    </s.Container>
  );
};

export default Post;
