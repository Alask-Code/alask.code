import React from 'react';
import { SkillType } from '../../types/SkillType';

export default function Skills({ skills, label, subtitle }: { skills: SkillType[]; label: string; subtitle: string }) {
  const [tooltip, setTooltip] = React.useState<{
    label: string;
    x: number;
    y: number;
  } | null>(null);

  return (
    <div className="flex flex-col">
      <p className="text-4xl">{label}</p>
      <p className="text-lg text-stone-500">{subtitle}</p>
      <div className="pt-4 flex flex-wrap gap-3">
        {skills.map(({ Skill, link, label: skillLabel }) => (
          <Skill
            key={skillLabel}
            onMouseEnter={(event) => setTooltip({ label: skillLabel, x: event.clientX, y: event.clientY })}
            onMouseMove={(event) => setTooltip({ label: skillLabel, x: event.clientX, y: event.clientY })}
            onMouseLeave={() => setTooltip(null)}
            onClick={() => {
              window.open(link);
            }}
            className="bg-white/10 text-5xl p-2"
          />
        ))}
      </div>
      {tooltip && (
        <p
          className="pointer-events-none fixed border border-white/20 bg-white/10 backdrop-blur-lg px-2 py-1 text-sm"
          style={{ left: tooltip.x + 12, top: tooltip.y + 12 }}
        >
          {tooltip.label}
        </p>
      )}
    </div>
  );
}
