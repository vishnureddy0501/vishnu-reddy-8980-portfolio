import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div
      id="experience"
      className="relative z-50 border-t my-16 lg:my-28 border-[#25213b] px-4 sm:px-6 lg:px-8"
    >
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

      <div className="flex justify-center pt-10">
        <div className="relative inline-block px-6 py-3 rounded-full bg-[#1a1443] text-white text-2xl font-semibold tracking-wide shadow-[0_0_15px_rgba(112,89,255,0.3)] ring-1 ring-violet-600/50 backdrop-blur-md">
          <span className="bg-gradient-to-r from-[#8f43ff] via-[#8433ff] to-[#16f2b3] bg-clip-text text-transparent">
            💼 My Experience Journey
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-12 py-10">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                <div className="relative p-6 text-white space-y-4">
                  <Image
                    src="/blur-23.svg"
                    alt="Blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-80 pointer-events-none select-none"
                  />

                  <div className="flex items-start sm:items-start justify-start gap-4">
                    <div className="text-violet-500 hover:scale-125 transition-transform duration-300 mt-1">
                      <Icon size={32} />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-0">
                        <div>
                          <h3 className="text-lg font-semibold uppercase">{exp.title}</h3>
                          <p className="text-sm text-gray-400">
                            {exp.company} {exp.location ? `• ${exp.location}` : ""}
                          </p>
                        </div>
                        <div className="text-sm text-[#16f2b3] whitespace-nowrap">{exp.duration}</div>
                      </div>

                      <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 pt-2">
                        {exp.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-3">
                        {exp.tech?.split(",").map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-semibold text-white bg-violet-600/20 border border-violet-500 rounded-full shadow-md backdrop-blur-sm"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
