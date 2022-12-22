// component
import Jukebox from "../components/Jukebox";
import MyAvatar from "../components/MyAvatar";

// style
import "../style/home.css";

const Home = () => {
  return (
    <div className="home-page container">
      <div className="title">
        <h1>Philippe MERCY</h1>

        <h2>Ingénieur Commercial et Marketing Confirmé</h2>
        <h2>Développeur Web full-stack Junior</h2>
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
      <section className="cv-section">
        <div className="avatar">
          <MyAvatar
            component="MyAvatarWaving"
            position={[0, -1, 0]}
            rotation={[0, 0.3, 0]}
          />
        </div>
        <div className="description">Découvrir mon parcours</div>
      </section>
      <section className="portfolio-section">
        <div className="description">Le Jukebox de mon Portfolio</div>
        <div className="jukebox">
          <Jukebox />
        </div>
      </section>
    </div>
  );
};

export default Home;
