import * as S from "./styles";
import { BsImages } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { GrFormNextLink } from "react-icons/gr";

const SearchGallery = ({ file, setImage, setFile, setIsShow, isShow }) => {
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
      setIsShow(!isShow);
    }
  };

  return (
    <S.Container>
      <div className="box-content">
        <div className="header">
          <h3 className="header__text">Nova Publicação</h3>
        </div>
        <div className="content">
          <div className="content-main">
            <BsImages className="content-main__icon" />
            <MdVideoLibrary className="content-main__icon" />
            <h4 className="content-main__text">Adicionar Fotos e Vídeos</h4>
            <label className="add-file" for="selecao-arquivo">
              Selecione um arquivo
            </label>
            <input id="selecao-arquivo" accept="image/*" type="file" onChange={handleChange}></input>
          </div>
          {/* <div className="content__progress">
            <progress className="content__progess__box"></progress>
          </div> */}
          <div className="content__prox-page">
            {file !== null && (
              <button
                className="prox-page__btn"
                onClick={() => setIsShow(!isShow)}
              >
                <GrFormNextLink />
              </button>
            )}
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default SearchGallery;
