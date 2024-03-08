import React from "react";

const skillsContent = [
  {
    name: "Laravel",
    skillPercent: "100",
  },
  {
    name: "CodeIgniter",
    skillPercent: "100",
  },
  {
    name: "WordPress",
    skillPercent: "100",
  },
  {
    name: "Django",
    skillPercent: "100",
  },
  {
    name: "Flask",
    skillPercent: "100",
  }
];

const SkillsFramework = () => {
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

export default SkillsFramework;
