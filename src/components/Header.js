import { Link, useNavigate } from "react-router-dom";

import meth from "../assets/img/Meth.png";

// style
import "../style/header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="container">
      <div className="left">
        <img
          src={meth}
          onClick={() => {
            navigate("/");
          }}
          alt="avatar Philippe MERCY"
        />
        <Link to="/PageCV">mon CV</Link>
        <Link to="/Portfolio">mon Portfolio</Link>
      </div>
      <div className="right">
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
