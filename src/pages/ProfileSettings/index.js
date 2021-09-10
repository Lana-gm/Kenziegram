import Header from "../../components/Header";
import { useState } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { useContext } from "react";
import { UsersContext } from "../../providers/Users";
import { useForm } from "react-hook-form";

const ProfileSettings = () => {
  const { users } = useContext(UsersContext);
  const { name, img, status, email } = users[0];

  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(false);

  const { handleSubmit, register } = useForm();

  const handleClick = () => {
    setEdit(true);
    setInput(true);
  };

  const onSubmit = (data) => {
    console.log(data);
    setInput(false);
  };

  return (
    <S.Container>
      <Header />
      <S.ContainerPage>
        <S.HeaderEdit>
          <NavLink to="/profile" className="icone_seta">
            <BiLeftArrowAlt />
          </NavLink>
          {!edit ? (
            <button onClick={handleClick}>Editar</button>
          ) : (
            <button type="submit">Salvar</button>
          )}
        </S.HeaderEdit>
        <h1>Editar Perfil</h1>
        <S.ContainerMain>
          <div className="change_picture">
            <img src={img} alt={name} />
            <p>Alterar foto de perfil</p>
          </div>

          {input ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="change_information input_text">
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Nome de usuário"
                  className="input_content"
                />
              </div>
              <div className="change_information input_text">
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input_content"
                />
              </div>
              <div className="change_information input_text">
                <input
                  type="text"
                  {...register("bio")}
                  placeholder="Bio"
                  className="input_content"
                />
              </div>
            </form>
          ) : (
            <>
              <div className="change_information">
                <p className="placeholder">Nome de usuário</p>
                <p>{name}</p>
              </div>
              <div className="change_information">
                <p className="placeholder">Email</p>
                <p>{email}</p>
              </div>
              <div className="change_information">
                <p className="placeholder">Bio</p>
                <p>{status}</p>
              </div>
            </>
          )}
        </S.ContainerMain>
      </S.ContainerPage>
    </S.Container>
  );
};

export default ProfileSettings;
