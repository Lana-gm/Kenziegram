import * as S from "./styles";

import Fade from "react-reveal/Fade";

import { useContext } from "react";
import { UsersContext } from "../../providers/Users";
import User from "../User";

const UsersContainer = ({ inputValue, setInputValue, filtered }) => {
  const { users } = useContext(UsersContext);
  return (
    <S.Container>
      {!!filtered
        ? filtered.map((user, index) => (
            <Fade>
              <li>
                {users.filter}
                <User key={index} user={user} />
              </li>
            </Fade>
          ))
        : users.map((user, index) => (
            <Fade>
              <li>
                {users.filter}
                <User key={index} user={user} />
              </li>
            </Fade>
          ))}
    </S.Container>
  );
};

export default UsersContainer;
