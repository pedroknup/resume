import React from "react";
import { SkillBarComponent } from "./skill-bar";
import "./technical-skills.component.scss";

const LanguagesSkills = () => {
  return (
    <div className="sector-container-languages">
      <div className="sector">
        <h2>English</h2>
        <SkillBarComponent title="Reading" text="" speed={3} value={83} />
        <SkillBarComponent title="Writing" text="" speed={3} value={80} />
        <SkillBarComponent title="Speaking" text="" speed={3} value={65} />
      </div>
      <div className="sector">
        <h2>Brazilian Portuguese</h2>
        <span>Native</span>
      </div>
     
    </div>
  );
};

export default LanguagesSkills;
