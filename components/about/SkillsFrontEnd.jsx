import React from "react";

const skillsContent = [
  {
    name: "HTML5",
    skillPercent: "100",
  },
  {
    name: "CSS3",
    skillPercent: "100",
  },
  {
    name: "SASS",
    skillPercent: "100",
  },
  {
    name: "jQuery",
    skillPercent: "80",
  },
  {
    name: "VueJs",
    skillPercent: "50",
  },
  {
    name: "React",
    skillPercent: "50",
  },
  {
    name: "TypeScript",
    skillPercent: "50",
  }
];

const SkillsFontEnd = () => {
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

export default SkillsFontEnd;
