import { Link } from "react-router-dom";

// components
import SectionCV from "../components/SectionCV";
import MyAvatar from "../components/MyAvatar";

// style
import "../style/pageCV.css";

const PageCV = () => {
  return (
    <div className="pageCV container">
      <h1>Mon Parcours</h1>
      <Link
        to="../CV_Philippe_MERCY_2023.pdf"
        target="_blank"
        download
        className="top"
      >
        <h4>Télécharger un CV en version PDF</h4>
        <div className="avatar">
          <MyAvatar
            component="MyAvatarWriting"
            position={[-0.8, -0.8, 0]}
            rotation={[0, 0, 0]}
            fov={1.2}
          />
        </div>
      </Link>
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
            description: <Link to="/portfolio">Voir mon Portfolio </Link>,
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
      <SectionCV
        sectionTitle="Missions effectuées"
        itemsArray={[
          {
            logo: require("../assets/img/logoGRTGAZ.png"),
            logoAlt: "GRTgaz",
            localisation: "2019-2022 | GRTgaz - Bois-Colombes (92)",
            title: "Responsable Grands Comptes - Référent Biométhane",
            description:
              "Développement du biométhane dans l'industrie en France (lobbying réglementaire, marketing, animation des forces de ventes)",
          },
          {
            logo: require("../assets/img/logoGRDF.png"),
            logoAlt: "GRDF",
            localisation: "2015-2019 | GRDF - Paris (9ème)",
            title: "Chef de projets - Développement Marché d'Affaires",
            description: `Gestion de projets marketing et SI. Définition et mise en place d'un accueil clients entreprises`,
          },
          {
            logo: require("../assets/img/logoGRDF.png"),
            logoAlt: "GRDF",
            localisation: "2009-2015 | GRDF - Paris (9ème)",
            title: "Chef de marché tertiaire",
            description:
              "Définition et pilotage des actions commerciales et des objectifs de développement du gaz naturel sur le marché tertiaire en France.",
          },
          {
            logo: require("../assets/img/ENGIE_logotype.png"),
            logoAlt: "ENGIE",
            localisation:
              "2005-2009 | GDF-SUEZ (ENGIE maintenant) - Saint-Ouen (93)",
            title: "Responsable de Comptes",
            description:
              "Fidélisation et développement des ventes de gaz chez des grands groupes industriels européens ",
          },
          {
            logo: require("../assets/img/ENGIE_logotype.png"),
            logoAlt: "ENGIE",
            localisation:
              "2003-2005 | Gaz de France (ENGIE maintenant) - Saint-Ouen (93)",
            title: "Manager Commercial",
            description:
              "Management de l'équipe commerciale Ile de France (6 personnes)",
          },
          {
            logo: require("../assets/img/ENGIE_logotype.png"),
            logoAlt: "ENGIE",
            localisation:
              "1997-2003 | Gaz de France (ENGIE maintenant) - Nancy (54)",
            title: "Ingénieur Commercial",
            description:
              "Raccordement et développement des ventes de gaz chez des clients industriels du 'Grand Est'",
          },
          {
            logo: require("../assets/img/1959-NORELEC.jpg"),
            logoAlt: "NORELEC",
            localisation:
              "1991-1997 | NORELEC (Eiffage Energie Systèmes maintenant) - Béthune (62)",
            title: "Ingénieur d'Affaires",
            description:
              "Réalisation de devis et suivi d'affaires d'installation électrique chez des clients industriels",
          },
        ]}
      />
      <SectionCV
        sectionTitle="Etat civil et Contact"
        itemsArray={[
          {
            logo: require("../assets/img/PM.gif"),
            logoAlt: "Philippe MERCY",
            localisation: "Philippe MERCY",
            title: "55 ans",
            description: "marié, 2 enfants",
          },
          {
            logo: require("../assets/img/domicile.jpeg"),
            logoAlt: "domicile",
            localisation: "5 allée des Prunus",
            title: "95230 SOISY-sous-MONTMORENCY  ",
            description: "",
          },
          {
            logo: require("../assets/img/contact.jpg"),
            logoAlt: "contact",
            localisation: "",
            title: "+33 6 73 88 18 48",
            description: (
              <a href="mailto:philippe.mercy@free.fr">philippe.mercy@free.fr</a>
            ),
          },
        ]}
      />
    </div>
  );
};

export default PageCV;
