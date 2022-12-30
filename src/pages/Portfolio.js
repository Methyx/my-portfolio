// components
import MyAvatar from "../components/MyAvatar";

// style
import "../style/portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio container">
      <div className="top">
        <h1>"C'est en codant qu'on apprend à coder"</h1>
        <MyAvatar
          component="MyAvatarBicycle"
          position={[-0.8, -0.4, 0]}
          rotation={[0, 0, 0]}
          fov={2.2}
        />
      </div>
      <div className="item-portfolio">
        <div className="text">
          <h2>Site inspiré de Happy Cow</h2>
          <h3>Projet Full-Stack</h3>
          <h3>Base de données MongoDB (shops and users)</h3>
          <div className="icons">
            <img src={require("../assets/img/html.png")} alt="HTML" />
            <img src={require("../assets/img/css.png")} alt="CSS" />
            <img
              src={require("../assets/img/javascript.png")}
              alt="javascript"
            />
            <img src={require("../assets/img/react.png")} alt="REACT" />
            <div className="react">
              <p>React</p>
            </div>
            <img src={require("../assets/img/mongodb.png")} alt="MongoDB" />
          </div>
          <ul className="features">
            <li>Connexion / Inscription</li>
            <li>Recherche avec filtres</li>
            <li>Gestion de favoris</li>
            <li>Affichage sur carte</li>
            <li>Géolocalisation et recherche par distance</li>
          </ul>
        </div>
        <div className="image">toto</div>
      </div>
    </div>
  );
};

export default Portfolio;
