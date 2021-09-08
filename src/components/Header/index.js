import * as s from "./styles";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdChatBubble } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Header = () => {
  return (
    <s.Container>
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
                to="/message"
              >
                <MdChatBubble />
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink
                className="list__item__link"
                activeClassName="selected"
                to="/profile"
              >
                <BsPersonSquare />
              </NavLink>
            </li>
            <li className="list__item list__item-hidden">
              <NavLink
                className="list__item__link"
                activeClassName="selected"
                to="/login"
              >
                <RiLogoutBoxRLine />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </s.Container>
  );
};

export default Header;
