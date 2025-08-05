import React from 'react';
import { skillsImage } from "@/utils/skill-image";
import { FaLightbulb } from 'react-icons/fa';


const skillsData = {
  "Programming Languages": [
    { "name": "Java", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { "name": "JavaScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { "name": "TypeScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { "name": "Python", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { "name": "C++", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { "name": "C", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { "name": "HTML", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { "name": "CSS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ],
  "Libraries & Frameworks": [
    { "name": "React", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { "name": "Next.js", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { "name": "Tailwind", "icon": skillsImage('Tailwind')?.src },
    { "name": "Node.js", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { "name": "Vue", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" }
  ],
  "Tools & Platforms": [
    { "name": "VS Code", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { "name": "Git", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { "name": "GitHub", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { "name": "Firebase", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { "name": "Notion", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
    { "name": "Jupyter", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" }
  ],
  "Databases": [
    { "name": "MySQL", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { "name": "MongoDB", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ]
};

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
