import React from "react";

const skillsContent = [
  {
    name: "PHP",
    skillPercent: "100",
  },
  {
    name: "Python",
    skillPercent: "100",
  },
  {
    name: "C#",
    skillPercent: "80",
  },
  {
    name: "JavaScript",
    skillPercent: "80",
  },
  
];

const SkillsLanguage = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsLanguage;
