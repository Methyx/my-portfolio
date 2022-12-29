// components
import SectionCV from "../components/SectionCV";

// style
import "../style/pageCV.css";

const PageCV = () => {
  return (
    <div className="pageCV container">
      <SectionCV
        sectionTitle="Formation"
        itemsArray={[
          {
            logo: require("../assets/img/logo-le-reacteur-2.png"),
            logoAlt: "Le Reacteur",
            localisation: "2022 | PARIS (75)",
            title: "Développeur Web et Mobile",
            description: "Le Reacteur",
          },
          {
            logo: require("../assets/img/audencia.png"),
            logoAlt: "Audencia",
            localisation: "1989-90 | NANTES (44)",
            title: "3ème cycle de Gestion et Marketing",
            description: "Audencia (ex ESC Nantes)",
          },
          {
            logo: require("../assets/img/INSA-logo-coul.png"),
            logoAlt: "INSA Lyon",
            localisation: "1983-89 | LYON (69)",
            title: "Ingénieur en génie Mécanique - Automatique et Robotique",
            description: "INSA Lyon",
          },
        ]}
      />
      <SectionCV
        sectionTitle="Expériences Digitales"
        itemsArray={[
          {
            logo: require("../assets/img/lereacteur_rond_violet.png"),
            logoAlt: "Le Reacteur",
            localisation: "2022 | Formation Le Reacteur",
            title:
              "Réalisation de différents projets full-stack en JavaScript et React",
            description: "--> Voir mon Portfolio",
          },
          {
            logo: require("../assets/img/ingridlab.png"),
            logoAlt: "ingridlab",
            localisation: "2021 | GRTgaz",
            title: "Product Owner du portail client 'ingrid lab'",
            description:
              "Portail sécurisé d'accès aux consommations et à la qualité du gaz des clients consommateurs de GRTgaz",
          },
          {
            logo: require("../assets/img/KIT-Box.png"),
            logoAlt: "KIT-Box",
            localisation:
              "2020 | réalisation personnelle en Python sur Raspberry PI",
            title: "Box de visio-conférence pour personne en EHPAD",
            description:
              "Box à base de Raspberry PI, à connecter sur une télévision, pour établir une visio-conférence avec une personne en établissement de soins. Aucune action n'est nécessaire par l'appelé, mais les soignants peuvent refuser l'appel, interdire les appels pendant x minutes, etc ...",
          },
          {
            logo: require("../assets/img/studyGaz.png"),
            logoAlt: "StudyGaz",
            localisation: "2018 | GRDF",
            title: "Product Owner de l'outil de simulation 'StudyGaz'",
            description:
              "Outil de comparaison de différentes solutions énergétiques gaz pour les maîtres d'ouvrages du secteur tertiaire",
          },
          {
            logo: require("../assets/img/leads.jpeg"),
            logoAlt: "Détection de leads",
            localisation: "2017-2019 | GRDF",
            title:
              "Product Owner de l'outil interne de détection et de qualification des 'leads' commerciaux",
            description:
              "Outil SI permettant la sélection de projets via des sources externes, l'envoi vers un prestataire de pré-qualification (call-center), puis l'injection et le suivi dans le SI d'affaires des commerciaux",
          },
        ]}
      />
    </div>
  );
};

export default PageCV;
