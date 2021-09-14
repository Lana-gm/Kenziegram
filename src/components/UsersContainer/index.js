import * as S from "./styles";

import Fade from "react-reveal/Fade";

import { useContext } from "react";
import { UsersContext } from "../../providers/Users";
import User from "../User";

const UsersContainer = () => {
  const { users } = useContext(UsersContext);

  return (
    <S.Container>
      {users.map((user, index) => (
        <Fade>
          <User key={index} user={user} />
        </Fade>
      ))}
    </S.Container>
  );
};

export default UsersContainer;
