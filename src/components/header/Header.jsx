import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  // HIDE MENU WHEN WINDOW SIZE >  600PX
  const menu = window.matchMedia("(max-width: 600px)");
  menu.addEventListener("change", () => {
    if (menu.matches) {
      setShowMenu(false);
    }
  });

  //   show menu when the window screen  <= 600px
  const DisplayMenu = () => {
    setShowMenu(!showMenu);
  };

  const HideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header>
      <span className="brand">
        <Link className="logo" to={"/users"}>
          Debby
        </Link>
      </span>
      <nav className={showMenu ? "navActive" : "nav"}>
        <ul className="navBar">
          <li>
            <Link to={"/users"} onClick={HideMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={HideMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/users"} onClick={HideMenu}>
              Users
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={HideMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div id="menuBar" onClick={DisplayMenu}>
        <span className="material-symbols-outlined">menu</span>
      </div>
    </header>
  );
};

export default Header;
