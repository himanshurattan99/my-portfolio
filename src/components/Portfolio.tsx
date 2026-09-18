import { useCallback, useEffect, useRef, useState } from "react";
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
  icon?: (typeof sections)[number]["icon"];
  mode?: ViewMode;
  canMeasure?: boolean;
  onContentHeightChange?: (id: SectionId, height: number) => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

// Outer paper card used for each main portfolio section.
export const SectionFrame = ({
  id,
  title,
  color,
  icon,
  mode = "portfolio",
  canMeasure = false,
  onContentHeightChange,
  style,
  children,
}: SectionFrameProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mode !== "portfolio" || !canMeasure || !onContentHeightChange) return;

    const content = contentRef.current;
    if (!content) return;

    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = content.closest("section");
        const styles = section ? window.getComputedStyle(section) : null;
        const padding = styles ? parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom) : 0;
        onContentHeightChange(id, Math.ceil(content.scrollHeight + padding + 24));
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(content);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [canMeasure, id, mode, onContentHeightChange]);

  return (
    <section
      className="absolute overflow-hidden px-8 py-10 sm:px-10 md:px-16 md:py-12"
      data-section-color={color}
      id={id}
      style={style}
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
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 px-4"
        style={{
          opacity: mode === "game" ? 1 : 0,
          pointerEvents: mode === "game" ? "auto" : "none",
          transition: `opacity ${mode === "game" ? 425 : 340}ms ease-${mode === "game" ? "in" : "out"} ${mode === "game" ? 380 : 0}ms`,
        }}
      >
        {icon && <SketchIcon color={color} name={icon} size={36} />}
        <span className="max-w-28 text-center text-lg font-bold leading-tight" data-section-color={color}>
          {title}
        </span>
      </div>
      <div
        className="relative z-10"
        style={{
          opacity: mode === "portfolio" ? 1 : 0,
          pointerEvents: mode === "portfolio" ? "auto" : "none",
          transition: `opacity ${mode === "portfolio" ? 425 : 340}ms ease-${mode === "portfolio" ? "in" : "out"} ${mode === "portfolio" ? 380 : 0}ms`,
        }}
      >
        <div ref={contentRef}>
          <h2 className="sketch-heading mb-4 text-4xl font-bold" data-section-color={color}>
            {title}
          </h2>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
};

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

const defaultPortfolioHeights: Record<SectionId, number> = {
  about: 380,
  skills: 760,
  projects: 620,
  experience: 440,
  education: 300,
  contact: 280,
};

const portfolioGap = 48;
const portfolioTop = 176;
const portfolioWidth = "min(960px, calc(100vw - 32px))";

const gameLayouts = [
  { left: "8vw", top: "16vh" },
  { left: "42vw", top: "9vh" },
  { left: "78vw", top: "21vh" },
  { left: "7vw", top: "62vh" },
  { left: "43vw", top: "66vh" },
  { left: "76vw", top: "58vh" },
];

const layoutTransition = "transform 850ms cubic-bezier(.65,.02,.3,1), width 850ms cubic-bezier(.65,.02,.3,1), height 850ms cubic-bezier(.65,.02,.3,1)";

// Matches the hand-drawn view icons used by the reference interface.
const ModeToggle = ({ isGame, onToggle }: { isGame: boolean; onToggle: () => void }) => (
  <button
    aria-label={isGame ? "View portfolio" : "View game mode"}
    className="fixed right-5 top-5 z-20 h-12 w-12"
    onClick={onToggle}
    title={isGame ? "View portfolio" : "View game mode"}
    type="button"
  >
    <svg className="h-full w-full" fill="none" viewBox="0 0 48 48">
      <defs>
        <filter id="mode-toggle-rough">
          <feTurbulence baseFrequency="0.04" numOctaves="4" result="noise" type="fractalNoise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
      </defs>
      <path
        className="fill-paper-card"
        d="M24 4 Q36 3 42 12 Q48 22 43 32 Q38 44 24 44 Q10 45 5 34 Q0 22 6 12 Q12 3 24 4Z"
        filter="url(#mode-toggle-rough)"
        stroke="hsl(var(--pencil-dark))"
        strokeLinecap="round"
        strokeWidth="2"
      />
      {isGame ? (
        <g filter="url(#mode-toggle-rough)" stroke="hsl(var(--pencil-dark))" strokeLinecap="round">
          <path d="M15 11 L31 11 Q34 11 34 14 L34 36 Q34 38 32 38 L16 38 Q14 38 14 36 L14 13 Q14 11 15 11 Z" fill="none" strokeWidth="1.6" />
          <line strokeWidth="1.3" x1="18" x2="30" y1="17" y2="17" />
          <line strokeWidth="1.3" x1="18" x2="30" y1="22" y2="22" />
          <line strokeWidth="1.3" x1="18" x2="30" y1="27" y2="27" />
          <line strokeWidth="1.3" x1="18" x2="26" y1="32" y2="32" />
        </g>
      ) : (
        <g fill="none" filter="url(#mode-toggle-rough)" stroke="hsl(var(--pencil-dark))" strokeLinecap="round" strokeWidth="1.5">
          <rect height="9" rx="1" width="9" x="13" y="13" />
          <rect height="9" rx="1" width="9" x="26" y="13" />
          <rect height="9" rx="1" width="9" x="13" y="26" />
          <rect height="9" rx="1" width="9" x="26" y="26" />
        </g>
      )}
    </svg>
  </button>
);

const Portfolio = () => {
  const [mode, setMode] = useState<ViewMode>("portfolio");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [portfolioHeights, setPortfolioHeights] = useState(defaultPortfolioHeights);
  const transitionTimer = useRef<number | undefined>(undefined);
  const isGame = mode === "game";

  const handleContentHeightChange = useCallback((id: SectionId, height: number) => {
    setPortfolioHeights((current) => (current[id] === height ? current : { ...current, [id]: height }));
  }, []);

  const toggleMode = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setMode((current) => (current === "game" ? "portfolio" : "game"));
    transitionTimer.current = window.setTimeout(() => setIsTransitioning(false), 850);
  };

  useEffect(() => () => window.clearTimeout(transitionTimer.current), []);

  const portfolioTops = sections.reduce<Record<SectionId, number>>((layout, section, index) => {
    const previous = sections[index - 1];
    layout[section.id] = previous ? layout[previous.id] + portfolioHeights[previous.id] + portfolioGap : portfolioTop;
    return layout;
  }, {} as Record<SectionId, number>);

  const portfolioHeight = sections.reduce((total, section) => total + portfolioHeights[section.id] + portfolioGap, portfolioTop);

  return (
    <main
      className="paper-bg sketch-text relative min-h-screen overflow-hidden text-pencil-dark"
      style={{ height: isGame ? "100vh" : portfolioHeight + 80 }}
    >
      <ModeToggle isGame={isGame} onToggle={toggleMode} />

      {sections.map((section, index) => {
        const game = gameLayouts[index];
        return (
          <SectionFrame
            color={section.color}
            icon={section.icon}
            id={section.id}
            key={section.id}
            mode={mode}
            canMeasure={!isTransitioning}
            onContentHeightChange={handleContentHeightChange}
            style={{
              height: isGame ? 150 : portfolioHeights[section.id],
              left: 0,
              top: 0,
              transform: isGame
                ? `translate(${game.left}, ${game.top}) rotate(${section.rotation}deg)`
                : `translate(calc((100vw - min(960px, calc(100vw - 32px))) / 2), ${portfolioTops[section.id]}px)`,
              transition: layoutTransition,
              width: isGame ? 150 : portfolioWidth,
              willChange: "transform,width,height",
              zIndex: 1,
            }}
            title={section.title}
          >
            <SectionContent id={section.id} />
          </SectionFrame>
        );
      })}
    </main>
  );
};

export default Portfolio;