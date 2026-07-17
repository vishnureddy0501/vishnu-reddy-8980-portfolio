import { UserRound } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";

export default function ProfileSummary() {
  return (
    <section id="summary" className="portfolio-section border-t border-[#25213b]">
      <div className="section-divider" />
      <div className="section-heading">
        <UserRound className="h-6 w-6 text-[#16f2b3]" aria-hidden="true" />
        <h2 className="gradient-text">Profile Summary</h2>
      </div>

      <div className="mx-auto max-w-5xl rounded-2xl border border-violet-500/30 bg-gradient-to-br from-[#101123] to-[#0d1224] p-6 shadow-[0_0_35px_rgba(112,89,255,0.14)] sm:p-8">
        <p className="text-base leading-8 text-gray-300 sm:text-lg">
          {personalData.profileSummary}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {personalData.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[#16f2b3]/30 bg-[#16f2b3]/10 px-4 py-2 text-sm font-medium text-[#16f2b3]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
