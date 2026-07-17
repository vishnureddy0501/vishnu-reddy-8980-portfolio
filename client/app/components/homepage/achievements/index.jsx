import { Trophy } from "lucide-react";
import { achievements } from "@/utils/data/achievements";

export default function Achievements() {
  return (
    <section id="achievements" className="portfolio-section border-t border-[#25213b]">
      <div className="section-divider" />
      <div className="section-heading">
        <Trophy className="h-6 w-6 text-[#16f2b3]" aria-hidden="true" />
        <h2 className="gradient-text">Achievements</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((achievement) => (
          <article
            key={achievement.id}
            className="rounded-2xl border border-violet-500/30 bg-[#101123] p-6 text-center shadow-[0_0_30px_rgba(112,89,255,0.12)]"
          >
            <p className="text-3xl font-bold text-[#16f2b3]">{achievement.metric}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{achievement.title}</h3>
            <p className="mt-1 text-sm text-gray-400">{achievement.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
