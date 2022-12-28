import { useState } from "react";
import { useNavigate } from "react-router-dom";

// component
import MyAvatar from "../components/MyAvatar";

// style
import "../style/home.css";

const Home = () => {
  // init
  const navigate = useNavigate();
  // UseStates
  const [avatarAnimation1, setAvatarAnimation1] = useState("MyAvatarWaving");
  const [avatarAnimation2, setAvatarAnimation2] = useState(
    "MyAvatarLookingAround"
  );
  const [cvHighlight, setCvHighlight] = useState(false);
  const [portfolioHighlight, setPortfolioHighlight] = useState(false);

  return (
    <div className="home-page container">
      <div className="title">
        <h1>Philippe MERCY</h1>
        <h2>Ingénieur INSA en Automatique</h2>
        <h3>30 ans d'expérience de relation client</h3>
        <h2>Développeur Full-Stack JavaScript Junior</h2>
        <div className="icons">
          <img src={require("../assets/img/html.png")} alt="HTML" />
          <img src={require("../assets/img/css.png")} alt="CSS" />
          <img src={require("../assets/img/javascript.png")} alt="javascript" />
          <img src={require("../assets/img/react.png")} alt="REACT" />
          <div className="react">
            <p>React</p>
            <p>React Native</p>
          </div>
          <img src={require("../assets/img/mongodb.png")} alt="MongoDB" />
        </div>
      </div>
      <div className="resume">
        <p>
          Au travers de mes 30 ans d'expériences commerciales, marketing et de
          gestion de projets, j'ai acquis un sens aigu de la compréhension et de
          la satisfaction du besoin des "clients" (au sens large).
        </p>
      </div>
      <section
        className="cv-section"
        onMouseEnter={() => {
          setAvatarAnimation1("MyAvatarTwisting");
          setCvHighlight(true);
        }}
        onMouseLeave={() => {
          setAvatarAnimation1("MyAvatarWaving");
          setCvHighlight(false);
        }}
        onClick={() => {
          navigate("/pageCV");
        }}
      >
        <div className="avatar">
          <MyAvatar
            component={avatarAnimation1}
            position={[0, -1, 0]}
            rotation={[0, 0.3, 0]}
          />
        </div>
        <div className={cvHighlight ? "description highlight" : "description"}>
          Découvrir mon parcours
        </div>
        <div className="space"></div>
      </section>
      <section
        className="portfolio-section"
        onMouseEnter={() => {
          setAvatarAnimation2("MyAvatarShuffling");
          setPortfolioHighlight(true);
        }}
        onMouseLeave={() => {
          setAvatarAnimation2("MyAvatarLookingAround");
          setPortfolioHighlight(false);
        }}
      >
        <div className="space"></div>
        <div
          className={
            portfolioHighlight ? "description highlight" : "description"
          }
        >
          Voir mon Portfolio
        </div>
        <div className="avatar">
          <MyAvatar
            component={avatarAnimation2}
            position={[0, -1, 0]}
            rotation={[0, -1.8, 0]}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
