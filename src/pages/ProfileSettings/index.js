import { useState, useContext } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UsersContext } from "../../providers/Users";
import Header from "../../components/Header";
import * as S from "./styles";

const ProfileSettings = () => {
  const { users } = useContext(UsersContext);

  const { name, img, status, number } = users[0];

  const [edit, setEdit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    console.log(data);
    setEdit(false);
  };

  return (
    <S.Container>
      <Header />
      <S.ContainerPage>
        <S.HeaderEdit className="header_edit">
          <NavLink to="/profile" className="icone_seta">
            <BiLeftArrowAlt />
          </NavLink>
        </S.HeaderEdit>
        <h1 className="title_profile">Editar Perfil</h1>
        <S.ContainerMain className="main">
          <div className="profile_box">
            <div className="change_picture">
              <img src={img} alt={name} />
              <p>Alterar foto de perfil</p>
            </div>
            <h3 className="profile_name">{name}</h3>
          </div>

          {!edit ? (
            <S.ContainerInput>
              <div className="change_information">
                <p className="placeholder">Nome de usuário</p>
                <p>{name}</p>
              </div>
              <div className="change_information">
                <p className="placeholder">Número de telefone</p>
                <p>{number}</p>
              </div>
              <div className="change_information">
                <p className="placeholder">Bio</p>
                <p>{status}</p>
              </div>
              <button onClick={() => setEdit(true)}>Editar</button>
            </S.ContainerInput>
          ) : (
            <S.ContainerInput>
              <form onSubmit={handleSubmit(handleForm)}>
                <div className="change_information input_text">
                  <input
                    defaultValue={name}
                    {...register("name", { required: true })}
                    placeholder="Nome de usuário"
                    className="input_content"
                  />
                  {/* {errors.name && errors.name.type === "required" && (
                    <span>This is required</span>
                  )} */}
                </div>
                <div className="change_information input_text">
                  <input
                    defaultValue={number}
                    type="text"
                    {...register("number", { required: true })}
                    placeholder="Número de telefone"
                    className="input_content"
                  />
                </div>
                <div className="change_information input_text">
                  <textarea
                    className="textarea_content"
                    defaultValue={status}
                    {...register("bio", { required: true })}
                    placeholder="Bio"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button type="submit">Salvar</button>
              </form>
            </S.ContainerInput>
          )}
        </S.ContainerMain>
      </S.ContainerPage>
    </S.Container>
  );
};

export default ProfileSettings;
