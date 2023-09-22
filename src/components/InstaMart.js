import React, { useState, useContext } from "react";
import AccordionContext from "../utils/AccordionContext";

const Section = ({ title, description }) => {
  const { visibleSection, setVisibleSection } = useContext(AccordionContext);

  const isVisible = visibleSection;
  return (
    <div className="accordion">
      <h3>{title}</h3>
      {isVisible === title && <p>{description}</p>}
      {isVisible === title ? (
        <button onClick={() => setVisibleSection(null)} className="acc-btn">
          hide
        </button>
      ) : (
        <button onClick={() => setVisibleSection(title)} className="acc-btn">
          show
        </button>
      )}
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <AccordionContext.Provider value={{ visibleSection, setVisibleSection }}>
      <h1 style={{ margin: "20px" }}>Instamart</h1>
      <Section
        title="About"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the "
        }
      />
      <Section
        title="Teams"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the "
        }
      />
      <Section
        title="Careers"
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the "
        }
      />
    </AccordionContext.Provider>
  );
};

export default InstaMart;
