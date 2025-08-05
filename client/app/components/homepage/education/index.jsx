// "use client"
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-16 lg:my-28 border-[#25213b] px-4 sm:px-6 lg:px-8"
    >
      <Image
        src="/section.svg"
        alt="Section Background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section Divider */}
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-full max-w-4xl">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      {/* Section Heading */}
      <div className="flex justify-center pt-10">
        <div className="relative inline-block px-6 py-3 rounded-full bg-[#1a1443] text-white text-2xl font-semibold tracking-wide shadow-[0_0_15px_rgba(112,89,255,0.3)] ring-1 ring-violet-600/50 backdrop-blur-md">
          <span className="bg-gradient-to-r from-[#8f43ff] via-[#8433ff] to-[#16f2b3] bg-clip-text text-transparent">🎓 My Education Journey</span>
        </div>
      </div>

      {/* Education Cards */}
      <div className="flex flex-col items-center gap-12 py-10">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          {educations.map((education) => {
            const Icon = education.icon;
            return (
              <GlowCard key={education.id} identifier={`education-${education.id}`}>
                <div className="relative p-6 text-white">
                  <Image
                    src="/blur-23.svg"
                    alt="Blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-80 pointer-events-none select-none"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    {/* Icon & Info */}
                    <div className="flex items-center gap-4">
                      <div className="text-violet-500 hover:scale-125 transition-transform duration-300">
                        <Icon size={32} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold uppercase">{education.title}</h3>
                        <p className="text-sm text-gray-400">{education.institution}</p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="text-center sm:text-right">
                      <h3 className="text-sm text-[#16f2b3]">{education.duration}</h3>
                      <p className="text-xs text-gray-400">
                        {education.completed ? "Completed" : "Current"}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-4 text-sm text-gray-300 leading-relaxed">
                    {education.description}
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

export default Education;
