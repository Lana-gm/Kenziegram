import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../providers/Users";
import * as s from "./style";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const Storys = () => {
  const { users } = useContext(UsersContext);

  const handleNext = () => {
    document.getElementById("ok").scrollBy(300, 0);
  };

  const handleBack = () => {
    document.getElementById("ok").scrollBy(-300, 0);
  };

  return (
    <s.Container>
      <div className="titulos">
        <p className="titulo">Storys</p>
        <Link className="amigos" to="/search">
          Amigos
        </Link>
      </div>
      <div id="ok" className="usuarios">
        {users.map((user, index) => (
          <div className="usuario">
            <img src={user.img} alt="imagem do usuario" className="imagem" />
            <p className="nome">{user.name}</p>
          </div>
        ))}
        <IoChevronBackCircleSharp onClick={handleBack} id="back">
          Opa
        </IoChevronBackCircleSharp>
        <IoChevronBackCircleSharp onClick={handleNext} id="next">
          OK
        </IoChevronBackCircleSharp>
      </div>
    </s.Container>
  );
};

export default Storys;
