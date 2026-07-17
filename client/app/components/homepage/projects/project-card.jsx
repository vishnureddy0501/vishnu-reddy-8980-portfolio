// @flow strict
import * as React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] shadow-lg transition-all hover:border-violet-500/50 hover:shadow-pink-500/20">
      {/* Top gradient border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      {/* Header: Icon + Title (text starts after icon) */}
      <div className="px-5 pt-5 flex items-start gap-3">
        <span className="text-2xl pt-1">{project.icon}</span>
        <h2 className="text-xl lg:text-2xl font-semibold text-[#16f2b3]">
          {project.name}
        </h2>
      </div>

      {/* Role */}
      <div className="px-5 pt-2 pl-[3.75rem]">
        <p className="text-sm text-orange-400 font-medium">Role: {project.role}</p>
      </div>

      {/* Description */}
      <div className="px-5 pb-4 pt-3 sm:pl-[3.75rem]">
        <ul className="ml-5 list-disc space-y-2 text-sm leading-relaxed text-gray-300 marker:text-pink-400">
          {project.description.map((point) => (
            <li key={point} className="pl-1">{point}</li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="flex flex-wrap gap-2 px-5 pb-5 sm:pl-[3.75rem]">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs font-medium text-[#16f2b3] border border-[#16f2b3] bg-[#16f2b315] px-2.5 py-1 rounded-full hover:bg-[#16f2b325] transition"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Links as Gradient Buttons */}
      {(project.code || project.demo) && <div className="mt-auto flex items-center gap-4 px-5 pb-5 pl-[3.75rem]">
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repo"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#1f153a] via-[#8f43ff] to-[#16f2b3] hover:from-[#16f2b3] hover:to-[#8f43ff] transition-shadow shadow-md"
          >
            <FaGithub />
            Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            title="Live Preview"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#1f153a] via-pink-500 to-violet-600 hover:from-violet-600 hover:to-pink-500 transition-shadow shadow-md"
          >
            <FaExternalLinkAlt />
            Demo
          </a>
        )}
      </div>}

      {/* Bottom gradient border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-violet-600 to-transparent" />
    </article>
  );
}

export default ProjectCard;
