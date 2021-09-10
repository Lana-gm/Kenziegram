import Header from "../../components/Header";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import * as S from "./styles";

const ProfileSettings = () => {
  const [edit, setEdit] = useState(true);
  const [input, setInput] = useState(false);

  return (
    <>
      <Header />
      <S.ContainerPage>
        <S.HeaderEdit>
          <NavLink to="/profile" className="icone_seta">
            <BiLeftArrowAlt />
          </NavLink>
          {edit ? (
            <NavLink to="">
              <p>Editar</p>
            </NavLink>
          ) : (
            <NavLink to="">
              <p>Salvar</p>
            </NavLink>
          )}
        </S.HeaderEdit>
        <h1>Editar Perfil</h1>
        <S.ContainerMain>
          <div className="change_picture">
            <img src="" alt="" />
            <p>Alterar foto de perfil</p>
          </div>
          {/*
          <div className="change_information">
            <p>Nome de usuário</p>
            <p>Kelvin</p>
          </div>
          <div className="change_information">
            <p>Email</p>
            <p>Kelvin@gmail.com</p>
          </div>
          <div className="change_information">
            <p>Bio</p>
            <p>Hello</p>
          </div> */}

          <div className="change_information">
            <label>Nome de usuário</label>
            <p>Kelvin</p>
            {input ? <input type="text" /> : <div>Hello</div>}
          </div>
          <div className="change_information">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="change_information">
            <label>Nome de usuário</label>
            <input type="text" />
          </div>
        </S.ContainerMain>
      </S.ContainerPage>
    </>
  );
};

export default ProfileSettings;
