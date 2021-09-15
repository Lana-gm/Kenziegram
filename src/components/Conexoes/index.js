import { useContext, useState } from "react";
import { UsersContext } from "../../providers/Users";
import * as s from "./style";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useHistory } from "react-router-dom";

const Conexoes = () => {
  const [scrollHorizontal, setScrollHorizontal] = useState(0);
  const [width, setWidth] = useState();

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

  const handleProfile = () => {
    history.push("/profile/:id");
  };

  return (
    <s.Container>
      <div className="titulos">
        <p className="titulo">Conexões</p>
      </div>
      <ul id="usuariosId" onScroll={handleScroll}>
        {users.map((user, index) => (
          <li className="usuario" key={index} onClick={handleProfile}>
            <img
              src={user.img_url}
              alt="imagem do usuario"
              className="imagem"
            />
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
