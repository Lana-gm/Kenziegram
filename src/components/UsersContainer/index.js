import * as S from "./styles";

import { useContext } from "react";
import { UsersContext } from "../../providers/Users";
import User from "../User";

const UsersContainer = () => {
  const { users } = useContext(UsersContext);

  return (
    <S.Container>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </S.Container>
  );
};

export default UsersContainer;
