import * as S from "./styles";

import UsersContainer from "../../components/UsersContainer";
import Header from "../../components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../components/Logo";

const Search = () => {
  return (
    <>
      <Header />
      <S.Container>
        <div className="logo">
          <Logo />
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
