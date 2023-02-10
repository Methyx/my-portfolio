// components
import MyAvatar from "../components/MyAvatar";
import ItemPortfolio from "../components/ItemPortfolio";

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
      <ItemPortfolio
        title="Jeu de cartes Solitaire"
        subTitle={["Projet Front", "Algorithmie"]}
        icons={["HTML", "CSS", "JavaScript", "React", "Bootstrap"]}
        features={[
          "Drag'n Drop",
          "BootStrap'",
          "Composant récursif",
          "Responsive",
        ]}
        link="https://remarkable-twilight-096cd6.netlify.app/"
        images={[require("../assets/img/portfolio/Solitaire1.png")]}
        nbImages={1}
      />
      <ItemPortfolio
        title="Site sur les prénoms en France depuis 1900"
        subTitle={["Projet Full-Stack", "Base de données MongoDB"]}
        icons={["HTML", "CSS", "JavaScript", "React", "MongoDB"]}
        features={[
          "Base de données avec près de 4 000 000 d'items",
          "Recherche optimisée avec 'aggregate'",
          "Carte interactive",
          "Graphiques",
          "Responsive",
        ]}
        link="https://dashing-snickerdoodle-07b993.netlify.app/"
        images={[
          require("../assets/img/portfolio/LesPrenoms1.png"),
          require("../assets/img/portfolio/LesPrenoms2.png"),
          require("../assets/img/portfolio/LesPrenoms3.png"),
          require("../assets/img/portfolio/LesPrenoms4.png"),
          require("../assets/img/portfolio/LesPrenoms5.png"),
        ]}
        nbImages={1}
      />
      <ItemPortfolio
        title="Site inspiré de Happy Cow"
        subTitle={[
          "Projet Full-Stack",
          "Base de données MongoDB (shops and users)",
        ]}
        icons={["HTML", "CSS", "JavaScript", "React", "MongoDB"]}
        features={[
          "Connexion / Inscription",
          "Modification du profil utilisateur",
          "Recherche avec filtres",
          "Carousel de photos",
          "Gestion de favoris personnels",
          "Affichage sur carte",
          "Géolocalisation et recherche par distance",
          "Responsive",
        ]}
        link="https://main--delicate-smakager-087673.netlify.app/"
        images={[
          require("../assets/img/portfolio/HappyCow1.png"),
          require("../assets/img/portfolio/HappyCow2.png"),
          require("../assets/img/portfolio/HappyCow3.png"),
          require("../assets/img/portfolio/HappyCow4.png"),
          require("../assets/img/portfolio/HappyCow5.png"),
          require("../assets/img/portfolio/HappyCow6.png"),
          require("../assets/img/portfolio/HappyCow7.png"),
        ]}
        nbImages={1}
      />
      <ItemPortfolio
        title="Site inspiré de MARVEL"
        subTitle={["Projet Full-Stack", "Back-end de gestion de l'API MARVEL"]}
        icons={["HTML", "CSS", "JavaScript", "React"]}
        features={[
          "Back-end d'interface avec l'API MARVEL",
          "Recherche avec 'debounce'",
          "Gestion de favoris via les cookies",
          "Drag & drop pour le classement des favoris",
          "Responsive",
        ]}
        link="https://incomparable-smakager-5a824a.netlify.app/"
        images={[
          require("../assets/img/portfolio/Marvel1.png"),
          require("../assets/img/portfolio/Marvel2.png"),
          require("../assets/img/portfolio/Marvel3.png"),
          require("../assets/img/portfolio/Marvel4.png"),
          require("../assets/img/portfolio/Marvel5.png"),
        ]}
        nbImages={1}
      />
      <ItemPortfolio
        title="Application Mobile inspirée de AirBnB"
        subTitle={["Projet Front", "Application IOS et Android"]}
        icons={["HTML", "CSS", "JavaScript", "ReactNative"]}
        features={[
          "Connexion / Inscription",
          "Affichage de cartes",
          "Géolocalisation",
          "Accès à la galerie d'images",
          "Accès à l'appareil photo",
        ]}
        link=""
        images={[
          require("../assets/img/portfolio/AirBnB1.png"),
          require("../assets/img/portfolio/AirBnB2.png"),
          require("../assets/img/portfolio/AirBnB3.png"),
          require("../assets/img/portfolio/AirBnB4.png"),
        ]}
        nbImages={2}
      />
      <ItemPortfolio
        title="Site inspiré de VINTED"
        subTitle={[
          "Projet Full-Stack",
          "Base de données MongoDB (users and offers)",
        ]}
        icons={["HTML", "CSS", "JavaScript", "React", "MongoDB"]}
        features={[
          "Connexion / Inscription",
          "Publication d'annonces",
          "Upload de photos",
          "Barre de recherche avec filtres",
          "Paiement CB avec Stripe",
          "Responsive",
        ]}
        link="https://soft-meerkat-9657bf.netlify.app/"
        images={[
          require("../assets/img/portfolio/Vinted1.png"),
          require("../assets/img/portfolio/Vinted2.png"),
          require("../assets/img/portfolio/Vinted3.png"),
          require("../assets/img/portfolio/Vinted4.png"),
          require("../assets/img/portfolio/Vinted5.png"),
        ]}
        nbImages={1}
      />
      <ItemPortfolio
        title="Site inspiré de DELIVEROO"
        subTitle={["Projet Front"]}
        icons={["HTML", "CSS", "JavaScript", "React"]}
        features={[
          "Récupération de données",
          "Affichage des plats par catégorie",
          "Gestion d'un panier d'achat",
        ]}
        link=""
        images={[require("../assets/img/portfolio/Deliveroo1.png")]}
        nbImages={1}
      />
    </div>
  );
};

export default Portfolio;
