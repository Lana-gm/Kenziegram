import * as S from "./styles";

import { useAuth } from "../../providers/Auth";
import { db, storageRef } from "../../firebaseApi";
import { useEffect, useState } from "react";

const ModalProfile = ({ setShowModal, showModal }) => {
  const [userData, setUserData] = useState({});
  let docRef = {};
  const { loggedUser } = useAuth();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (loggedUser !== null) {
      docRef = db.collection("Users").doc(loggedUser.uid);

      docRef.onSnapshot((doc) => {
        setUserData(doc.data());
      });
    }
  }, [loggedUser]);

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
        setProgress(progress);
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
    <S.Display>
      <div className="container">
        <button className="close" onClick={() => setShowModal(!showModal)}>
          X
        </button>
        <div className="Content">
          <p className="content__title">Escolha sua nova foto de perfil</p>
          <div className="content__box-form">
            <input
              className="box-form__input"
              type="file"
              accept="image/*, video.mp4"
              onChange={(e) => upgradeProfileImage(e)}
            />
          </div>
          <label className="box-form__label" for="file">
            Downloading progress:
          </label>
          <progress value={progress} className="content__progress" max="100" />
        </div>
      </div>
    </S.Display>
  );
};

export default ModalProfile;
