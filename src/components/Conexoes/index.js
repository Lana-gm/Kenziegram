import { useContext, useState, useEffect } from "react";
import { UsersContext } from "../../providers/Users";
import * as s from "./style";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Conexoes = () => {
  const [scrollHorizontal, setScrollHorizontal] = useState(0);
  const [width, setWidth] = useState();

  const { loggedUser } = useAuth();
  const classes = useStyles();

  const history = useHistory();

  const { users } = useContext(UsersContext);

  const handleNext = () => {
    document.getElementById("usuariosId").scrollBy(200, 0);
  };

  const handleBack = () => {
    document.getElementById("usuariosId").scrollBy(-200, 0);
  };

  const handleScroll = () => {
    let scrollX = document.getElementById("usuariosId").scrollLeft;
    let scrollWidth = document.getElementById("usuariosId").scrollWidth;
    setScrollHorizontal(scrollX);
    setWidth(scrollWidth);
  };

  console.log(width - scrollHorizontal);

  const handleProfile = (id) => {
    if (loggedUser.uid === id) {
      history.push("/profile");
    } else {
      history.push(`/profileid/${id}`);
    }
  };

  return (
    <s.Container>
      <div className="titulos">
        <p className="titulo">Conexões</p>
      </div>
      <ul id="usuariosId" onScroll={handleScroll}>
        {users.map((user, index) => (
          <li
            className="usuario"
            key={index}
            onClick={() => handleProfile(user.key)}
          >
            {user.img_url ? (
              <img
                src={user.img_url}
                alt="imagem do usuario"
                className="imagem"
              />
            ) : (
              <div className={classes.root}>
                <CircularProgress className="carregamento" />
              </div>
            )}
            <p className="nome">{user.user}</p>
          </li>
        ))}
        {scrollHorizontal !== 0 ? (
          <IoChevronBackCircleSharp onClick={handleBack} id="back" />
        ) : null}
        {scrollHorizontal !== width - 959 ? (
          <IoChevronBackCircleSharp onClick={handleNext} id="next" />
        ) : null}
      </ul>
    </s.Container>
  );
};

export default Conexoes;
