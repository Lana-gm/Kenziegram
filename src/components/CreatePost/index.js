import * as S from "./styles";
import KelvinImg from "../../assets/kelvin.jpg";
import BlueButton from "../BlueButton";
const CreatePost = () => {
  return (
    <S.Container>
      <div className="content">
        <div className="content__box">
          <figure className="content__box__figure">
            <img className="box__figure__img" alt="post" src={KelvinImg} />
            <figcaption className="box__figure__figcaption">post</figcaption>
          </figure>
        </div>
        <div className="content__description">
          <h4 className="content__description__text">Descrição:</h4>

          <textarea
            className="content__description__textarea"
            rows="5"
            cols="30"
          ></textarea>
        </div>
        <div className="content__button">
          <BlueButton text="Cancelar" />
          <BlueButton text="Salvar" />
        </div>
      </div>
    </S.Container>
  );
};

export default CreatePost;
