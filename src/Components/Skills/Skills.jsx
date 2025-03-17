import React from "react";
import { skills } from "../../Data/SkillsData";
import { useSelector } from "react-redux";

const Skills = () => {
  const {textColor,textHover,textBg} = useSelector((state) => state.color);

  return (
    <div className="my-5 p-3.5 w-full sm:w-xl">
      <h6 className={`text-xl my-4  text-white ${textColor}`}>Skills</h6>

      <div className="grid sm:grid-cols-4 grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            className={`flex items-center border-[1px] gap-2 rounded-sm px-3 py-2 shadow-md   ${textHover} ${textBg} ${textColor} border-current`}
            key={index}
          >
            <div className="text-[11px]  text-white/80 sm:text-sm">{skill.icon}</div>
            <span className="text-[11px] text-white/80  sm:text-[10px] text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
