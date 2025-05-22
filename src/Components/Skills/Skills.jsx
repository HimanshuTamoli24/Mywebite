import React from "react";
import { skills } from "../../Data/SkillsData";
import { useSelector } from "react-redux";

const categorizedSkills = {
  Languages: ["Python", "C++","java"],
  Frontend: ["JavaScript", "HTML", "CSS", "Tailwind CSS", "ReactJS", "React-Redux", "Next.js"],
  Backend: ["Node.js", "ExpressJS", "Mongoose", "JWT", "Appwrite"],
  Database: ["MongoDB", "GraphQL", "Cloudinary"],
  Tools: ["Git", "Postman", "Vercel"],
};

const Skills = () => {
  const { textColor, textHover, textBg } = useSelector((state) => state.color);

  return (
    <div className="my-5 p-3.5 w-full sm:w-xl">
      <h6 className={`text-3xl italic my-4  text-white`}>Skills</h6>
      {skills.map((group, i) => (
        <div key={i} className="mb-6">
          <h4 className={`text-lg font-semibold mb-2 ${textColor}`}>{group.category}</h4>
          <div className="grid sm:grid-cols-4 grid-cols-3 gap-4">
            {group.items.map((skill, index) => (
              <div
                key={index}
                className={`flex items-center border gap-2 rounded-sm px-3 py-1 shadow-md ${textHover} ${textBg} ${textColor} border-current`}
              >
                <div className="text-[11px] text-white/80 sm:text-sm">{skill.icon}</div>
                <span className="text-[11px] text-white/80 sm:text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
};

export default Skills;
