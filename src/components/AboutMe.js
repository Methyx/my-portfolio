import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// style
import "../style/aboutMe.css";

const AboutMe = () => {
  // useStates
  const [partOneVisible, setPartOneVisible] = useState(false);
  const [partTwoVisible, setPartTwoVisible] = useState(false);
  return (
    <div className="about-me">
      <div
        className="title-part-one"
        onClick={() => {
          setPartOneVisible(!partOneVisible);
        }}
      >
        <h5>Pourquoi une reconversion après 30 ans d'expérience ?</h5>
        <h5>
          {partOneVisible ? (
            <FontAwesomeIcon icon="circle-arrow-up" />
          ) : (
            <FontAwesomeIcon icon="circle-arrow-down" />
          )}
        </h5>
      </div>
      <div
        className={partOneVisible ? "text-part-one" : "text-part-one hidden"}
      >
        <p>
          J'ai eu la chance d'évoluer dans beaucoup de postes autour du domaine
          commercial : depuis le terrain comme ingénieur commercial jusqu'au
          lobbying réglementaire, en passant par le management, l'animation des
          ventes, le marketing ...
        </p>
        <p>J'ai énormément appris, et j'ai essayé de beaucoup transmettre.</p>
        <p>
          Aujourd'hui, j'ai besoin de trouver <span>un nouvel élan</span> sur
          une voie qui me permette d'apprendre toujours plus, d'exercer ma{" "}
          <span>créativité</span>, et d'obtenir et de mesurer des{" "}
          <span>résultats concrets</span>.
        </p>
      </div>
      <div
        className="title-part-two"
        onClick={() => {
          setPartTwoVisible(!partTwoVisible);
        }}
      >
        <h5>Pourquoi le métier de développeur ?</h5>
        <h5>
          {partTwoVisible ? (
            <FontAwesomeIcon icon="circle-arrow-up" />
          ) : (
            <FontAwesomeIcon icon="circle-arrow-down" />
          )}
        </h5>
      </div>
      <div
        className={partTwoVisible ? "text-part-two" : "text-part-two hidden"}
      >
        <p>
          J'ai toujours été passionné d'informatique, à titre individuel, ou en
          tant que "geek" de l'équipe.
        </p>
        <p>
          Ces dernières années, j'ai contribué à plusieurs projets informatiques
          comme key-user, maître d'ouvrage ou "Product Owner".
        </p>
        <p>
          J'y retrouve toutes mes valeurs fortes :{" "}
          <span>
            compréhension et analyse du besoin, créativité, recherche de la
            satisfaction client, travail en équipe, évolution permanente
          </span>{" "}
          ... et je ressentais le besoin de passer "de l'autre coté".
        </p>
        <p>
          Je me suis donc naturellement tourné vers une formation très
          opérationnelle de développeur web full-stack en mode "boot-camp" (Le
          Reacteur).
        </p>
        <p>
          Et, après ces 3 mois hyper intenses, je peux confirmer que coder est
          pour moi un <span>nouveau moteur !</span>
        </p>
        <p>
          Je me sens prêt à{" "}
          <span>intégrer une équipe SI en tant que "JUNIOR"</span>, et ainsi,
          continuer à apprendre et à monter en compétence sur le code, mais
          également apporter à l'équipe mon solide sens du client, de la
          performance et de la satisfaction.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
