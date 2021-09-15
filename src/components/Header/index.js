import * as S from "./styles";
import Logo from "../Logo";
import { NavLink, Link } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import { firebaseApp } from "../../firebaseApi";
import { useAuth } from "../../providers/Auth";

const Header = () => {
  const { setLoggedUser } = useAuth();

  const handleLogOut = () => {
    firebaseApp.auth().signOut();
    setLoggedUser(null);
  };

  return (
    <S.Container>
      <div className="content">
        <Logo />
        <nav className="content__nav">
          <ul className="list">
            <li className="list__item">
              <NavLink
                className="list__item__link"
                activeClassName="selected"
                to="/home"
              >
                <AiFillHome />
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink
                className="list__item__link"
                activeClassName="selected"
                to="/search"
              >
                <AiOutlineSearch />
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink
                className="list__item__link"
                activeClassName="selected"
                to="/postage"
              >
                <FiPlusSquare />
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink
                className="list__item__link"
                activeClassName="selected"
                to="/profile"
              >
                <CgProfile />
              </NavLink>
            </li>
            <li className="list__item list__item-hidden">
              <Link
                className="list__item__link"
                onClick={handleLogOut}
                to="/login"
              >
                <RiLogoutBoxRLine />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </S.Container>
  );
};

export default Header;
