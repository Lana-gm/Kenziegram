import * as s from "./styles";
import { AiFillLike } from "react-icons/ai";
import React from "react";

export const PostHome = () => {
  return (
    <s.Container>
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

export default PostHome;
