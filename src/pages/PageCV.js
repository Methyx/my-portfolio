import { useState } from "react";

// style
import "../style/pageCV.css";

const PageCV = () => {
  // UseStates
  const [educationVisible, setEducationVisible] = useState(false);

  return (
    <div className="pageCV container">
      <section className="education">
        <div
          className="title"
          onClick={() => {
            setEducationVisible(!educationVisible);
          }}
        >
          <h1>Formation</h1>
          <span>v</span>
        </div>
        <div className={educationVisible ? "contain" : "contain hidden"}>
          <div className="item">
            <div className="logo">
              <img
                src={require("../assets/img/logo-le-reacteur-2.png")}
                alt="Le Reacteur"
              />
            </div>
            <div className="content">
              <p>2022 | PARIS (75)</p>
              <h2>Développeur Web et Mobile</h2>
              <p>Le Reacteur</p>
            </div>
          </div>
          <div className="item">
            <div className="logo">
              <img src={require("../assets/img/audencia.png")} alt="Audencia" />
            </div>
            <div className="content">
              <p>1989-90 | NANTES (44)</p>
              <h2>3ème cycle de Gestion et Marketing</h2>
              <p>Audencia (ex ESC Nantes)</p>
            </div>
          </div>
          <div className="item">
            <div className="logo">
              <img
                src={require("../assets/img/INSA-logo-coul.png")}
                alt="INSA Lyon"
              />
            </div>
            <div className="content">
              <p>1983-89 | LYON (69)</p>
              <h2>Ingénieur en génie Mécanique - Automatique et Robotique</h2>
              <p>INSA Lyon</p>
            </div>
          </div>
        </div>
      </section>
      <section className="digital-experiences">
        <div className="title">
          <h1>Expériences Digitales</h1>
          <span>v</span>
        </div>
        <div className="contain"></div>
      </section>
      <section className="career">
        <div className="title">
          <h1>Expérience Professionnelle complète</h1>
          <span>v</span>
        </div>
        <div className="contain"></div>
      </section>
    </div>
  );
};

export default PageCV;
