import * as S from "./styles";
import KelvinImg from "../../assets/kelvin.jpg";
import BlueButton from "../BlueButton";
import { useState } from 'react';

const CreatePost = ({ image, file, setIsShow, isShow }) => {

  const [description, setDescription] = useState('');

  const handleSave = () => {
    let postFile = file;
    
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
