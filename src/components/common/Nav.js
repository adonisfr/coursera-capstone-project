import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <Logo />
      <div className="container-menu">
        <div className="btnMenu">
          <img
            src="/icon_hamburger_menu.svg"
            alt="menu"
            role="button"
            onClick={() => setOpenMenu(true)}
          />
        </div>
        <div className="menu-list">
          <Menu />
        </div>
        {openMenu && (
          <div className="panel-nav-menu">
            <div className="close-menu">
              <span role="button" onClick={() => setOpenMenu(false)}>
                X
              </span>
            </div>
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
