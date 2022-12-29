import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// style
import "../style/sectionCV.css";

const SectionCV = ({ sectionTitle, itemsArray }) => {
  // UseStates
  const [sectionVisible, setSectionVisible] = useState(false);

  return (
    <section className="sectionCV">
      <div
        className="title"
        onClick={() => {
          setSectionVisible(!sectionVisible);
        }}
      >
        <h1>{sectionTitle}</h1>
        <span>
          {sectionVisible ? (
            <FontAwesomeIcon icon="circle-arrow-up" />
          ) : (
            <FontAwesomeIcon icon="circle-arrow-down" />
          )}
        </span>
      </div>
      <div className={sectionVisible ? "contain" : "contain hidden"}>
        {itemsArray.map((item, index) => {
          return (
            <div className="item">
              <div className="logo">
                <img src={item.logo} alt={item.logoAlt} />
              </div>
              <div className="content">
                <h3>{item.localisation}</h3>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCV;
