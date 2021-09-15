import { Link } from "react-router-dom";
import * as S from "./styles";
import { useAuth } from "../../providers/Auth";

const User = ({ user }) => {
  const { loggedUser } = useAuth();

  return (
    <Link
      to={loggedUser.uid === user.id ? "/profile" : `/profileid/${user.key}`}
    >
      <S.Container>
        <img className="profile__img" src={user.img_url} alt="Profile" />
        <div className="profile__content">
          <h3 className="profile__content__name">{user.user}</h3>
        </div>
      </S.Container>
    </Link>
  );
};

export default User;
