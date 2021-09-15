import * as S from "./styles";

import { useState, useContext, useEffect } from "react";
import UsersContainer from "../../components/UsersContainer";
import Header from "../../components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../components/Logo";

import { UsersContext } from "../../providers/Users";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const { users } = useContext(UsersContext);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    filteredUsers(inputValue);
  }, [inputValue]);

  const filteredUsers = (inputValue) => {
    const filtered = users.filter((user) =>
      user.user.toUpperCase().includes(inputValue.toUpperCase())
    );
    setFiltered(filtered);
  };

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

            <input
              className="content__input"
              value={inputValue}
              placeholder="Pesquisar"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
        <UsersContainer
          inputValue={inputValue}
          setInputValue={setInputValue}
          filtered={filtered}
        />
      </S.Container>
    </>
  );
};

export default Search;
