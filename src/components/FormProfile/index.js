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
    const docRef = doc(db, "Users", loggedUser.uid);
    await updateDoc(docRef, {
      user: data.name,
      phone: data.phone,
      bio: data.bio,
    });
    setEdit(!edit);
    history.push("/profile");
  };

  return (
    <form className="form_input" onSubmit={handleSubmit(onSubmit)}>
      <div className="change_information input_text">
        <input
          defaultValue={userData.user}
          type="text"
          {...register("name", { required: true })}
          placeholder="Nome de usuário"
          className="input_content"
        />
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
  );
};

export default FormProfile;