import * as S from "./styles";

import Header from "../../components/Header";
import ModalProfile from "../../components/ModalProfile";
import FormProfile from "../../components/FormProfile";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { BiLeftArrowAlt } from "react-icons/bi";
import { db } from "../../firebaseApi";

import { useAuth } from "../../providers/Auth";

const ProfileSettings = () => {
  const { loggedUser } = useAuth();

  const [userData, setUserData] = useState({});
  let docRef = {};

  const [edit, setEdit] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (loggedUser !== null) {
      docRef = db.collection("Users").doc(loggedUser.uid);

      docRef.onSnapshot((doc) => {
        setUserData(doc.data());
      });
    }
  }, [loggedUser]);

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
              <img src={userData.img_url} alt={userData.user} />
              {showModal && (
                <ModalProfile
                  setShowModal={setShowModal}
                  showModal={showModal}
                />
              )}
            </div>
          </div>

          {!edit ? (
            <S.ContainerInput>
              <div className="change_information">
                <p className="placeholder">Nome de usuário</p>
                <p>{userData.user}</p>
              </div>
              <div className="change_information">
                <p className="placeholder">Phone</p>
                <p>{userData.phone}</p>
              </div>
              <div className="change_information">
                <p className="placeholder">Bio</p>
                <p>{userData.bio}</p>
              </div>
              <button onClick={() => setEdit(true)}>Editar</button>
            </S.ContainerInput>
          ) : (
            <S.ContainerInput>
              <button
                onClick={() => setShowModal(true)}
                className="alterar-foto"
              >
                Alterar foto de perfil
              </button>
              <FormProfile setEdit={setEdit} edit={edit} />
            </S.ContainerInput>
          )}
        </S.ContainerMain>
      </S.ContainerPage>
    </S.Container>
  );
};

export default ProfileSettings;
