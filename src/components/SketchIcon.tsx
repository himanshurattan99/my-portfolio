import type { SketchIconName, SectionColor } from "@/data/portfolio";

interface SketchIconProps {
  name: SketchIconName;
  size?: number;
  className?: string;
  color?: SectionColor;
}

type IconRenderer = (size: number, color?: SectionColor) => React.ReactElement;

// Shared SVG defaults keep the icons visually consistent.
const iconProps = (color?: SectionColor) => ({
  fill: "none",
  stroke: "hsl(var(--pencil-dark))",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "data-color": color,
});

// Local registry of hand-drawn SVG icons used by portfolio data.
const icons: Record<SketchIconName, IconRenderer> = {
  person: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <circle cx="20" cy="12" r="6" />
      <path d="M10 35 Q10 22 20 22 Q30 22 30 35" />
      <path d="M14 28 L10 35" />
      <path d="M26 28 L30 35" />
    </svg>
  ),
  lightning: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <path d="M22 3 L10 22 H20 L17 37 L32 16 H21 Z" />
    </svg>
  ),
  compass: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <circle cx="20" cy="20" r="15" />
      <path d="M20 8 L20 12" />
      <path d="M20 28 L20 32" />
      <path d="M8 20 L12 20" />
      <path d="M28 20 L32 20" />
      <polygon points="15,25 18,18 25,15 22,22" fill="hsl(var(--pencil-dark))" data-fill-color={color} />
    </svg>
  ),
  briefcase: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <path d="M5 14 Q5 12 7 12 H33 Q35 12 35 14 V32 Q35 34 33 34 H7 Q5 34 5 32 Z" />
      <path d="M14 12 V9 Q14 7 16 7 H24 Q26 7 26 9 V12" />
      <path d="M5 20 H35" />
      <path d="M18 20 V24 H22 V20" />
    </svg>
  ),
  mortarboard: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <path d="M2 16 L20 8 L38 16 L20 24 Z" />
      <path d="M10 20 V30 Q20 36 30 30 V20" />
      <path d="M34 16 V28" />
      <circle cx="34" cy="29" r="1.5" fill="hsl(var(--pencil-dark))" data-fill-color={color} />
    </svg>
  ),
  envelope: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <path d="M4 12 Q4 10 6 10 H34 Q36 10 36 12 V30 Q36 32 34 32 H6 Q4 32 4 30 Z" />
      <path d="M4 12 L20 22 L36 12" />
    </svg>
  ),
  pencil: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <path d="M8 32 L6 34 L8 36 L30 14 L28 10 Z" />
      <path d="M28 10 L32 6 Q34 4 36 6 L34 8 L30 14" />
      <path d="M8 32 L10 28" />
    </svg>
  ),
  server: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <rect x="7" y="8" width="26" height="10" rx="2" />
      <rect x="7" y="22" width="26" height="10" rx="2" />
      <path d="M13 13 H13.01" />
      <path d="M13 27 H13.01" />
      <path d="M18 13 H28" />
      <path d="M18 27 H28" />
    </svg>
  ),
  wrench: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <path d="M25 5 Q31 6 34 12 L27 19 L21 13 L28 6" />
      <path d="M23 17 L8 32 Q6 34 8 36 Q10 38 12 36 L27 21" />
      <path d="M10 34 L12 32" />
    </svg>
  ),
  bug: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <path d="M14 13 Q20 8 26 13 V28 Q20 34 14 28 Z" />
      <path d="M20 12 V32" />
      <path d="M10 18 H4" />
      <path d="M30 18 H36" />
      <path d="M10 26 H4" />
      <path d="M30 26 H36" />
      <path d="M15 9 L12 5" />
      <path d="M25 9 L28 5" />
    </svg>
  ),
  bot: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <rect x="9" y="13" width="22" height="18" rx="4" />
      <path d="M20 13 V7" />
      <circle cx="20" cy="6" r="2" />
      <path d="M15 21 H15.01" />
      <path d="M25 21 H25.01" />
      <path d="M15 27 Q20 30 25 27" />
    </svg>
  ),
  certificate: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 40 40" {...iconProps(color)}>
      <path d="M4 6 H36 V28 H4 Z" />
      <path d="M10 14 H30" />
      <path d="M10 19 H26" />
      <circle cx="30" cy="28" r="6" />
      <path d="M27 33 L27 38" />
      <path d="M33 33 L33 38" />
    </svg>
  ),
  email: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps(color)} strokeWidth="1.5">
      <path d="M3 8 L12 14 L21 8" />
      <rect x="3" y="5" width="18" height="14" rx="1" />
    </svg>
  ),
  github: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps(color)} strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M9 18 Q9 15 10 14 Q7 13 7 10 Q7 8 9 7 Q8 5 9 4 Q11 4 13 6 Q14 5.5 16 6 Q17 4 18 5 Q18 6 17 7 Q19 8 19 10 Q19 13 16 14 Q17 15 17 18" />
    </svg>
  ),
  linkedin: (size, color) => (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps(color)} strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11 V16" />
      <path d="M8 8 V8.01" />
      <path d="M12 16 V13 Q12 11 14 11 Q16 11 16 13 V16" />
    </svg>
  ),
};

// Looks up an icon by name and renders it at the requested size.
const SketchIcon = ({ name, size = 32, className = "", color }: SketchIconProps) => (
  <span className={`inline-flex shrink-0 ${className}`}>{icons[name](size, color)}</span>
);

export default SketchIcon;