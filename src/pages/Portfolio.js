// components
import MyAvatar from "../components/MyAvatar";

// style
import "../style/portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio container">
      <div className="top">
        <MyAvatar
          component="MyAvatarBicycle"
          position={[-0.8, -0.4, 0]}
          rotation={[0, 0, 0]}
          fov={2.2}
        />
      </div>
    </div>
  );
};

export default Portfolio;
