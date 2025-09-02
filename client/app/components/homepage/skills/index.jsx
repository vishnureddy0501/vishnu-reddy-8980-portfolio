import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import skillsData from "@/utils/data/skills-data.js"
const Skills = () => {
  return (
    <div id="skills" className="relative z-50 border-t mb-16 border-[#25213b] px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full max-w-4xl">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      
      {/* Section Heading */}
      <div className="flex justify-center p-10">
        <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1a1443] text-white text-2xl font-semibold tracking-wide shadow-[0_0_20px_rgba(112,89,255,0.4)] ring-1 ring-violet-600/50 backdrop-blur-md">
          <FaLightbulb className="text-[#16f2b3] w-6 h-6 drop-shadow-[0_0_10px_#16f2b3]" />
          <span className="bg-gradient-to-r from-[#8f43ff] via-[#8433ff] to-[#16f2b3] bg-clip-text text-transparent">
            My Technical Skills
          </span>
        </div>
      </div>


      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-10">
          <h3 className="text-2xl font-semibold text-center mb-6">{category}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map(skill => (
              <div
                key={skill.name}
                className="flex items-center bg-white text-black px-4 py-2 rounded-xl shadow-[6px_6px_0px_#555] hover:scale-105 transition-transform"
              >
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 mr-2" />
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
