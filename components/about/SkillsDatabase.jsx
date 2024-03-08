import React from "react";

const skillsContent = [
  {
    name: "MySQL",
    skillPercent: "100",
  },
  {
    name: "PostgreSQL",
    skillPercent: "100",
  },
  {
    name: "MongoDB",
    skillPercent: "80",
  },
  {
    name: "Oracle",
    skillPercent: "70",
  }
];

const SkillsDatabase = () => {
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

export default SkillsDatabase;
