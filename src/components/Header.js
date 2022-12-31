import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import meth from "../assets/img/Meth.png";

// style
import "../style/header.css";

const Header = () => {
  // init
  const navigate = useNavigate();
  const location = useLocation().pathname;

  // useStates
  const [showMenuText, setShowMenuText] = useState(false);

  //
  return (
    <header className={showMenuText ? "container show-menu-text" : "container"}>
      <div className="left">
        <img
          src={meth}
          onClick={() => {
            navigate("/");
          }}
          alt="avatar Philippe MERCY"
        />
        <div className={showMenuText ? "menu show-menu-text2" : "menu"}>
          <div className="menu-bars">
            <FontAwesomeIcon
              icon="bars"
              onClick={() => {
                setShowMenuText(!showMenuText);
              }}
            />
          </div>
          <div
            className="menu-text"
            onClick={() => {
              setShowMenuText(false);
            }}
          >
            <Link
              to="/pageCV"
              className={location === "/pageCV" ? "underlined" : null}
            >
              mon CV
            </Link>
            <Link
              to="/portfolio"
              className={location === "/portfolio" ? "underlined" : null}
            >
              mon Portfolio
            </Link>
          </div>
        </div>
      </div>
      <div className={showMenuText ? "right disappear" : "right"}>
        <a href="https://github.com/Methyx" target="_blank" rel="noreferrer">
          <img src={require("../assets/img/github-mark.png")} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/philippe-mercy-973697180/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={require("../assets/img/linkedin.png")} alt="linkedin" />
        </a>
        <a href="mailto:philippe.mercy@free.fr">
          <img src={require("../assets/img/mail-icon.png")} alt="mail" />
        </a>
      </div>
    </header>
  );
};
export default Header;
