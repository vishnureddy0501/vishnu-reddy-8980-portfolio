import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Image from 'next/image';

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 border-t mb-16 border-[#25213b] px-4 sm:px-6 lg:px-8">

      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full max-w-4xl">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>
      {/* Header with Glow Effect */}
      <div className="flex justify-center pb-10 pt-10">
        <div className="relative inline-block px-6 py-3 rounded-full bg-[#1a1443] text-white text-2xl font-semibold tracking-wide shadow-[0_0_15px_rgba(112,89,255,0.3)] ring-1 ring-violet-600/50 backdrop-blur-md">
          <span className="bg-gradient-to-r from-[#8f43ff] via-[#8433ff] to-[#16f2b3] bg-clip-text text-transparent">
            💼 My Projects
          </span>
        </div>
      </div>

      {/* Grid Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsData.slice(0, 4).map((project, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg bg-white/10 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
