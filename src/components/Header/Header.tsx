import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/icons/logo.svg";
import { ReactComponent as LocationSvg } from "../../assets/icons/location-icon.svg";
import css from "./Header.module.scss";
import Burger from "../Burger/Burger";

const pagesLinks = [
  {
    linkText: "О нас",
    linkUrl: "#",
  },
  {
    linkText: "Оплата и доставка",
    linkUrl: "#",
  },
  {
    linkText: "Новости",
    linkUrl: "#",
  },
  {
    linkText: "Контакты",
    linkUrl: "#",
  },
];

function Header(): JSX.Element {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleClick() {
    setIsOpenMenu((prevState) => !prevState);
  }

  return (
    <header className={css.header}>
      <Link className={css.header__logoLink} to="#">
        <LogoSvg className={css.header__logoSvg} />
      </Link>
      <Burger onClick={handleClick} isOpen={isOpenMenu} />
      <div
        className={`${css.header__content} ${
          isOpenMenu && css.header__content_showOnMobile
        }`}
      >
        <nav className={css.nav}>
          <ul className={css.nav__list}>
            {pagesLinks.map((itemObj) => {
              return (
                <li className={css.nav__listItem} key={itemObj.linkText}>
                  <NavLink
                    className={css.nav__link}
                    to={itemObj.linkUrl}
                    onClick={() => setIsOpenMenu(false)}
                  >
                    {itemObj.linkText}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <address className={css.header__contacts}>
          <div className={css.contacts__position}>
            <LocationSvg className={css.contacts__positionIcon} />
            Ульяновск
          </div>
          <a className={css.contacts__telephoneBlock} href="tel:+79997778866">
            <div className={css.contacts__telephoneNumber}>
              +7 999 777 88 66
            </div>
            <div className={css.contacts__telephoneMessage}>
              Заказать звонок
            </div>
          </a>
        </address>
      </div>
    </header>
  );
}

export default Header;
