import Header from "../../components/Header";
import { BiLeftArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Kelvin from "../../assets/kelvin.jpg";
import { db, storageRef } from "../../firebaseApi";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../providers/Auth";
import { getDownloadURL } from "@firebase/storage";

const ProfileSettings = () => {
  const { loggedUser } = useAuth();
  const [UpdateProfile, setUpdateProfile] = useState();
  const [userData, setUserData] = useState({});
  let docRef = {};

  const [edit, setEdit] = useState(false);

  const { handleSubmit, register } = useForm();

  useEffect(() => {
    if (loggedUser !== null) {
      docRef = db.collection("Users").doc(loggedUser.uid);

      docRef.onSnapshot((doc) => {
        setUserData(doc.data());
      });
    }
  }, [loggedUser]);

  const onSubmit = async (data) => {
    const docRef = doc(db, "Users", loggedUser.uid);
    await updateDoc(docRef, {
      user: data.name,
      phone: data.phone,
      bio: data.bio,
    });
    setEdit(false);
  };

  const upgradeProfileImage = (e) => {
    // get file
    const file = e.target.files[0];

    // create ref
    const uploadTask = storageRef.child(`profile/${userData.user}`).put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is" + progress + "% done");
      },
      (error) => {
        console.log("Não foi possível fazer o upload", error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("url: ", downloadURL);

          db.collection("Users").doc(loggedUser.uid).update({
            img_url: downloadURL,
          });
        });
      }
    );
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
              <img src={userData.img_url} alt={userData.user} />
              <input
                type="file"
                //value="Alterar"
                name="adicionar"
                id="fileButton"
                accept="image/*, video.mp4"
                onChange={(e) => upgradeProfileImage(e)}
              />
            </div>
            <h3 className="profile_name">{userData.user}</h3>
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
              <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
                <div className="change_information input_text">
                  <input
                    defaultValue={userData.user}
                    type="text"
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
                    defaultValue={userData.phone}
                    type="text"
                    {...register("phone", { required: true })}
                    placeholder="Phone"
                    className="input_content"
                  />
                </div>
                <div className="change_information input_text">
                  <textarea
                    className="textarea_content"
                    defaultValue={userData.bio}
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
