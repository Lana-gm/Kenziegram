import * as S from "./styles";

import UsersContainer from "../../components/UsersContainer";
import Header from "../../components/Header";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <>
      <Header />
      <S.Container>
        <div className="container-icon">
          <AiOutlineClose className="icon-close" />
        </div>

        <div className="container-search">
          <h3 className="container-search__text">Pesquisar</h3>
          <div className="content">
            <AiOutlineSearch className="content__icon" />

            <input className="content__input" placeholder="Pesquisar" />
          </div>
        </div>
        <UsersContainer />
      </S.Container>
    </>
  );
};

export default Search;
