import { useState } from "react";
import {
  aboutContent,
  contactItems,
  education,
  experience,
  projects,
  sections,
  skillGroups,
  type SectionColor,
  type SectionId,
} from "@/data/portfolio";
import SketchIcon from "./SketchIcon";

type ViewMode = "portfolio" | "game";

interface SectionFrameProps {
  id: SectionId;
  title: string;
  color: SectionColor;
  children: React.ReactNode;
}

// Outer paper card used for each main portfolio section.
export const SectionFrame = ({ id, title, color, children }: SectionFrameProps) => (
  <section
    className="relative mx-auto w-full max-w-240 overflow-hidden px-8 py-10 sm:px-10 md:px-16 md:py-12"
    data-section-color={color}
    id={id}
  >
    <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 150 150">
      <defs>
        <filter id={`rough-section-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>
      </defs>
      <path
        d="M20 6 Q75 3 130 7 Q147 8 143 22 Q147 75 143 128 Q142 145 130 143 Q75 147 20 143 Q5 142 7 128 Q3 75 7 22 Q6 7 20 6 Z"
        fill="hsl(var(--paper-card))"
        filter={`url(#rough-section-${id})`}
        stroke="hsl(var(--pencil-dark))"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        data-color={color}
      />
    </svg>
    <div className="relative z-10">
      <h2 className="sketch-heading mb-4 text-4xl font-bold" data-section-color={color}>
        {title}
      </h2>
      <div>{children}</div>
    </div>
  </section>
);

// Smaller sketch card for repeated items inside a section.
export const SketchBox = ({ children, color }: { children: React.ReactNode; color?: SectionColor }) => (
  <div className="relative rounded-sm px-5 py-4">
    <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path
        d="M3 5 Q50 2 97 5 Q99 50 97 95 Q50 98 3 95 Q1 50 3 5 Z"
        fill="hsl(var(--paper-card))"
        stroke="hsl(var(--pencil-dark))"
        strokeLinecap="round"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        data-color={color}
      />
    </svg>
    <div className="relative z-10">{children}</div>
  </div>
);

const AboutSection = () => (
  <div className="space-y-4 text-xl leading-relaxed sm:text-2xl">
    {aboutContent.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </div>
);

// Groups skills by category and renders each item as a sketch chip.
const SkillsSection = () => (
  <div className="space-y-7">
    {skillGroups.map((group, groupIndex) => (
      <div className="space-y-3" key={group.group}>
        <div className="flex items-center gap-3">
          <SketchIcon color={sections[groupIndex % sections.length].color} name={group.icon} size={26} />
          <h3 className="text-2xl font-bold">{group.group}</h3>
          <div className="grow border-b border-dashed border-pencil-dark/25" />
        </div>
        <div className="flex flex-wrap gap-2.5">
          {group.items.map((item, itemIndex) => (
            <span
              className="sketch-chip px-4 py-1 text-lg"
              key={item}
              style={{ transform: `rotate(${((groupIndex * 7 + itemIndex * 13) % 5) - 2}deg)` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// Project cards reuse the same small sketch box treatment.
const ProjectsSection = () => (
  <div className="grid gap-5 md:grid-cols-2">
    {projects.map((project, index) => {
      const color = sections[(index + 2) % sections.length].color;
      return (
        <SketchBox color={color} key={project.name}>
          <div className="flex gap-3">
            <SketchIcon color={color} name="compass" size={24} />
            <div>
              <h3 className="text-2xl font-bold" data-section-color={color}>
                {project.name}
              </h3>
              <p className="mt-2 text-lg leading-relaxed">{project.description}</p>
              <p className="mt-2 text-base italic text-pencil-medium">~ {project.tech}</p>
            </div>
          </div>
        </SketchBox>
      );
    })}
  </div>
);

// Experience entries stay stacked for easy scanning.
const ExperienceSection = () => (
  <div className="space-y-5">
    {experience.map((item, index) => {
      const color = sections[(index + 3) % sections.length].color;
      return (
        <SketchBox color={color} key={`${item.role}-${item.company}`}>
          <div className="flex gap-4">
            <SketchIcon color={color} name="briefcase" size={28} />
            <div className="space-y-1">
              <h3 className="text-2xl font-bold">{item.role}</h3>
              <p className="text-lg text-pencil-medium">
                {item.company} • {item.period}
              </p>
              <p className="text-lg leading-relaxed">{item.description}</p>
            </div>
          </div>
        </SketchBox>
      );
    })}
  </div>
);

// Education currently has one compact credential card.
const EducationSection = () => (
  <div className="space-y-5">
    {education.map((item) => (
      <SketchBox color="purple" key={`${item.title}-${item.institution}`}>
        <div className="flex gap-4">
          <SketchIcon color="purple" name="mortarboard" size={28} />
          <div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-lg text-pencil-medium">
              {item.institution} • {item.period}
            </p>
            <p className="mt-2 text-lg">CGPA: {item.cgpa}</p>
          </div>
        </div>
      </SketchBox>
    ))}
  </div>
);

// Contact methods render as compact linked-style chips for now.
const ContactSection = () => (
  <div className="flex flex-wrap gap-4">
    {contactItems.map((item, index) => {
      const color = sections[(index + 5) % sections.length].color;
      return (
        <SketchBox color={color} key={item.text}>
          <span className="flex items-center gap-2 text-xl">
            <SketchIcon color={color} name={item.icon} size={22} />
            {item.text}
          </span>
        </SketchBox>
      );
    })}
  </div>
);

// Keeps route/detail rendering aligned with the main section ids.
const sectionContent: Record<SectionId, React.ReactNode> = {
  about: <AboutSection />,
  skills: <SkillsSection />,
  projects: <ProjectsSection />,
  experience: <ExperienceSection />,
  education: <EducationSection />,
  contact: <ContactSection />,
};

export const SectionContent = ({ id }: { id: SectionId }) => sectionContent[id];

const gamePositions = [
  "left-[8%] top-[16%]",
  "left-[42%] top-[9%]",
  "right-[9%] top-[21%]",
  "left-[7%] bottom-[18%]",
  "left-[43%] bottom-[12%]",
  "right-[11%] bottom-[20%]",
];

// Compact section card used by the early game-mode layout.
const GameCard = ({ section, index }: { section: (typeof sections)[number]; index: number }) => (
  <div
    className={`absolute ${gamePositions[index]} float-bob flex h-37.5 w-37.5 items-center justify-center`}
    style={{ animationDelay: `${section.bobDelay}s`, transform: `rotate(${section.rotation}deg)` }}
  >
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-2">
      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 150 150">
        <path
          d="M20 6 Q75 3 130 7 Q147 8 143 22 Q147 75 143 128 Q142 145 130 143 Q75 147 20 143 Q5 142 7 128 Q3 75 7 22 Q6 7 20 6 Z"
          fill="hsl(var(--paper-card))"
          stroke="hsl(var(--pencil-dark))"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          data-color={section.color}
        />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-2" style={{ transform: `rotate(${-section.rotation}deg)` }}>
        <SketchIcon color={section.color} name={section.icon} size={36} />
        <span className="max-w-28 text-center text-lg font-bold leading-tight" data-section-color={section.color}>
          {section.title}
        </span>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [mode, setMode] = useState<ViewMode>("portfolio");
  const isGame = mode === "game";

  return (
    <main className={`paper-bg sketch-text min-h-screen text-pencil-dark ${isGame ? "h-screen overflow-hidden" : "px-4 pb-16 pt-44 sm:px-6"}`}>
      <button
        className="paper-surface fixed right-5 top-5 z-20 border-2 border-pencil-dark px-4 py-2 text-lg font-bold shadow-sketch"
        onClick={() => setMode(isGame ? "portfolio" : "game")}
        type="button"
      >
        {isGame ? "Portfolio" : "Game"}
      </button>

      {/* Player movement and section interactions will build on this layout. */}
      {isGame ? (
        <div className="relative h-screen w-full">
          {sections.map((section, index) => (
            <GameCard index={index} key={section.id} section={section} />
          ))}
        </div>
      ) : (
        <div className="mx-auto flex max-w-240 flex-col gap-12">
          {sections.map((section) => (
            <SectionFrame color={section.color} id={section.id} title={section.title}>
              <SectionContent id={section.id} />
            </SectionFrame>
          ))}
        </div>
      )}
    </main>
  );
};

export default Portfolio;