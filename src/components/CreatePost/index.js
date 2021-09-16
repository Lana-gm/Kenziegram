import * as S from "./styles";
import BlueButton from "../BlueButton";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { db, storageRef, firebaseApp } from "../../firebaseApi";
import { useAuth } from "../../providers/Auth";

const CreatePost = ({ image, file, setFile, setIsShow, isShow }) => {
  const { loggedUser } = useAuth();

  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [posts, setPosts] = useState(0);

  useEffect(() => {
    let unsub = db
      .collection("Users")
      .doc(loggedUser.uid)
      .get()
      .then((doc) => {
        if (doc.data().posts !== "--") {
          setPosts(parseInt(doc.data().posts));
        } else {
          setPosts(-1);
        }
      });
    return unsub;
  }, [loggedUser]);

  const history = useHistory();

  const handleSave = () => {
    const postFile = file;

    const timestamp = new Date().getTime();
    const uploadTask = storageRef
      .child(`users/${loggedUser.uid}/${timestamp}${postFile.name}`)
      .put(postFile);

    setDisabled(true);

    const makeid = (length) => {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        let id = makeid(24);
        history.push("/home");
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          db.collection("Posts")
            .doc("001")
            .collection(loggedUser.uid)
            .doc(id)
            .set({
              user_id: loggedUser.uid,
              created_at: timestamp,
              img_url: url,
              description: description,
              likes: 0,
              comments: 0,
            });
          db.collection("Feed").doc(id).set({
            user_id: loggedUser.uid,
            created_at: timestamp,
            img_url: url,
            description: description,
            likes: 0,
            comments: 0,
          });
          if (posts >= 0) {
            db.collection("Users")
              .doc(loggedUser.uid)
              .update({
                posts: posts + 1,
              });
          }
          history.push("/home");
        });
      }
    );
  };

  const handleCancel = () => {
    setIsShow(true);
    setFile(null);
  };

  return (
    <S.Container>
      <div className="content">
        <div className="content__box">
          <figure className="content__box__figure">
            <img className="box__figure__img" alt="post" src={image} />
            <figcaption className="box__figure__figcaption">post</figcaption>
          </figure>
        </div>
        <div className="content__description">
          <h4 className="content__description__text">Descrição:</h4>

          <textarea
            className="content__description__textarea"
            rows="5"
            cols="30"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="content__button">
          <BlueButton text="Cancelar" onClick={handleCancel} />
          <BlueButton disabled={disabled} text="Salvar" onClick={handleSave} />
        </div>
      </div>
    </S.Container>
  );
};

export default CreatePost;
