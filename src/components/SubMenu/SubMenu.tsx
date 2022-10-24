import { NavLink } from "react-router-dom";
import css from "./SubMenu.module.scss";

const productLinks = [
  {
    linkText: "Диваны и кресла",
    linkUrl: "/sofa",
  },
  {
    linkText: "Кровати",
    linkUrl: "/bed",
  },
  {
    linkText: "Шкафы",
    linkUrl: "/closet",
  },
  {
    linkText: "Комоды и тумбы",
    linkUrl: "/dresser",
  },
  {
    linkText: "Матрасы",
    linkUrl: "/mattress",
  },
];

function SubMenu() {
  return (
    <div className={css.submenu}>
      <ul className={css.subMunu__container}>
        {productLinks.map((itemObj) => {
          return (
            <li className={css.submenu__linkContainer} key={itemObj.linkText}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? `${css.submenu__link} ${css.submenu__link_active}`
                    : css.submenu__link
                }
                to={itemObj.linkUrl}
              >
                {itemObj.linkText}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubMenu;
