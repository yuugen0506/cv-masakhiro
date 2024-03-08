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
    name: "VB.NET",
    skillPercent: "100",
  },
  {
    name: "REST",
    skillPercent: "100",
  },
  {
    name: "Apache",
    skillPercent: "100",
  },
  {
    name: "Nginx",
    skillPercent: "100",
  },
  {
    name: "Websocket",
    skillPercent: "80",
  }
];

const SkillsBackEnd = () => {
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

export default SkillsBackEnd;
