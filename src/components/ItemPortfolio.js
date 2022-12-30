// style
import "../style/itemPortfolio.css";

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ItemPortfolio = ({
  title,
  subTitle,
  icons,
  features,
  link,
  images,
  nbImages,
}) => {
  const carouselResponsive = {
    desktop: {
      breakpoint: { max: 5000, min: 200 },
      items: nbImages,
    },
  };
  return (
    <div className="item-portfolio-content">
      <h2>{title}</h2>
      <div className="item-portfolio">
        <div className="text">
          {subTitle.map((item, index) => {
            return <h3 key={index}>{item}</h3>;
          })}
          <div className="icons">
            {icons.includes("HTML") && (
              <img src={require("../assets/img/html.png")} alt="HTML" />
            )}
            {icons.includes("CSS") && (
              <img src={require("../assets/img/css.png")} alt="CSS" />
            )}
            {icons.includes("JavaScript") && (
              <img
                src={require("../assets/img/javascript.png")}
                alt="javascript"
              />
            )}
            {(icons.includes("React") || icons.includes("ReactNative")) && (
              <img src={require("../assets/img/react.png")} alt="REACT" />
            )}
            <div className="react">
              {icons.includes("React") && <p>React</p>}
              {icons.includes("ReactNative") && <p>React Native</p>}
            </div>
            {icons.includes("MongoDB") && (
              <img src={require("../assets/img/mongodb.png")} alt="MongoDB" />
            )}
          </div>
          <ul className="features">
            {features.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              voir le site
            </a>
          )}
        </div>
        <div className="images">
          <Carousel
            responsive={carouselResponsive}
            containerClass="carousel-container"
            swipeable
            infinite
            autoPlay
            showDots
          >
            {images.map((item, index) => {
              return (
                <img
                  className="carousel-image"
                  key={index}
                  src={item}
                  alt="copie d'ecran"
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ItemPortfolio;
