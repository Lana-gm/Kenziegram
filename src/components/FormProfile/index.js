import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../../providers/Auth";
import { db } from "../../firebaseApi";
const FormProfile = ({ setEdit, edit }) => {
  const { loggedUser } = useAuth();

  const [userData, setUserData] = useState({});
  let docRef = {};

  useEffect(() => {
    if (loggedUser !== null) {
      docRef = db.collection("Users").doc(loggedUser.uid);

      docRef.onSnapshot((doc) => {
        setUserData(doc.data());
      });
    }
  }, [loggedUser]);

  const { handleSubmit, register } = useForm();

  const history = useHistory();
  const onSubmit = async (data) => {
    const { user, phone, bio } = data;

    const docRef = doc(db, "Users", loggedUser.uid);

    if (user === "") {
      data.user = userData.user;
    }
    if (phone === "") {
      data.phone = userData.phone;
    }
    if (bio === "") {
      data.bio = userData.bio;
    }

    await updateDoc(docRef, {
      user: data.user,
      phone: data.phone,
      bio: data.bio,
    });
    setEdit(false);

    history.push("/profile");
  };

  return (
    <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
      <div className="change_information input_text">
        <input
          defaultValue={userData.user}
          type="text"
          {...register("user")}
          placeholder="Nome de usuário"
          className="input_content"
          maxLength="20"
        />
      </div>
      <div className="change_information input_text">
        <input
          defaultValue={userData.phone}
          type="text"
          {...register("phone")}
          placeholder="Phone"
          className="input_content"
        />
      </div>
      <div className="change_information input_text">
        <textarea
          className="textarea_content"
          defaultValue={userData.bio}
          {...register("bio")}
          placeholder="Bio"
          cols="30"
          rows="10"
          maxLength="100"
        ></textarea>
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormProfile;
