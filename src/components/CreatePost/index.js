import * as S from "./styles";
import KelvinImg from "../../assets/kelvin.jpg";
import BlueButton from "../BlueButton";
import { useState } from 'react';

import { db, storageRef, firebaseApp } from '../../firebaseApi';
import { useAuth } from '../../providers/Auth';

const CreatePost = ({ image, file, setIsShow, isShow }) => {

  const { loggedUser } = useAuth();

  const [description, setDescription] = useState('');
  const [downloadURL, setDownloadURL] = useState('');

  const handleSave = () => {
    const postFile = file;
    const uploadTask = storageRef.child(`users/${loggedUser.uid}/${postFile.name}`).put(postFile);

    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
      setDownloadURL(url);
    });

    db.collection('Posts').doc('001').collection(loggedUser.uid).doc().set({
      img_url: downloadURL,
      description: description,
      likes: 0,
      comments: 0
    });
  }

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
          <BlueButton text="Cancelar" />
          <BlueButton text="Salvar" onClick={handleSave} />
        </div>
      </div>
    </S.Container>
  );
};

export default CreatePost;
