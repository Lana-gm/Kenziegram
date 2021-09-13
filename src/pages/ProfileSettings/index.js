import Header from "../../components/Header";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Kelvin from '../../assets/kelvin.jpg';

import { db } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const ProfileSettings = () => {

  const { loggedUser } = useAuth();

  const [userData, setUserData] = useState({});
  let docRef = {};

  const { name, img, status, number } = users[0];

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (loggedUser !== null) {
      docRef = db.collection('Users').doc(loggedUser.uid);

      docRef.get().then((doc) => {
        setUserData(doc.data());
      });
    }
  }, [loggedUser]);

  const handleClick = () => {
    setEdit(true);
    setInput(true);
  };

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
              <img src={Kelvin} alt={userData.user} />
              <p>Alterar foto de perfil</p>
            </div>
            <h3 className="profile_name">{userData.user}</h3>
          </div>

          {input ? (
            <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
              <div className="change_information input_text">
                <input
                  value={userData.user}
                  type="text"
                  {...register("name")}
                  placeholder="Nome de usuário"
                  className="input_content"
                />
              </div>
              <div className="change_information input_text">
                <input
                  value={userData.email}
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input_content"
                />
              </div>
              <div className="change_information input_text">
                <input
                  value={userData.bio}
                  type="text"
                  {...register("bio")}
                  placeholder="Bio"
                  className="input_content"
                />
              </div>
            </form>
          ) : (
            <S.ContainerInput>
              <div className="change_information">
                <p className="placeholder">Nome de usuário</p>
                <p>{userData.user}</p>
              </div>
              <div className="change_information">
                <p className="placeholder">Email</p>
                <p>{userData.email}</p>
              </div>
              <div className="change_information">
                <p className="placeholder">Bio</p>
                <p>{userData.bio}</p>
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
