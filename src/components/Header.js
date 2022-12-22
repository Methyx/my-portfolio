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
        <img src={require("../assets/img/github.png")} alt="github" />
        <img src={require("../assets/img/linkedin.png")} alt="linkedin" />
        <img src={require("../assets/img/mail.jpg")} alt="mail" />
      </div>
    </header>
  );
};
export default Header;
