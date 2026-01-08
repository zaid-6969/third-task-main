import React from "react";

const Progressbar = () => {
  const skills = [
    { title: "Creativity", percent: 72 },
    { title: "Advertising", percent: 84 },
    { title: "Design", percent: 72 }
  ];

  return (
    <>
      {skills.map((skill, index) => (
        <div key={index} className="skill-row">
          <div className="skill-header">
            <span><h2>{skill.title}</h2></span>
            <span>{skill.percent}%</span>
          </div>

          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Progressbar;
