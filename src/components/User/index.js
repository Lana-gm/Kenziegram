import * as S from "./styles";

const User = ({ user }) => {
  return (
    <S.Container>
      <img className="profile__img" src={user.img} alt="Profile" />
      <div className="profile__content">
        <h3 className="profile__content__name">{user.name}</h3>
      </div>
    </S.Container>
  );
};

export default User;
