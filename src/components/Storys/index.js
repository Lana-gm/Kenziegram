import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../providers/Users";
import * as s from "./style";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const Storys = () => {
  const [scrollHorizontal, setScrollHorizontal] = useState(0);
  const [width, setWidth] = useState();

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

  return (
    <s.Container>
      <div className="titulos">
        <p className="titulo">Storys</p>
        <Link className="amigos" to="/search">
          Amigos
        </Link>
      </div>
      <div id="usuariosId" onScroll={handleScroll}>
        {users.map((user, index) => (
          <div className="usuario" key={index}>
            <img src={user.img} alt="imagem do usuario" className="imagem" />
            <p className="nome">{user.name}</p>
          </div>
        ))}
        {scrollHorizontal !== 0 ? (
          <IoChevronBackCircleSharp onClick={handleBack} id="back" />
        ) : null}
        {scrollHorizontal !== width - 975 ? (
          <IoChevronBackCircleSharp onClick={handleNext} id="next" />
        ) : null}
      </div>
    </s.Container>
  );
};

export default Storys;
