import { memo } from "react";

const BackgroundDoodles = memo(() => (
    <svg aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1280 720">
        <g fill="none" opacity="0.5" stroke="hsl(var(--pencil-dark))" strokeLinecap="round" strokeLinejoin="round">
            <g transform="translate(40, 100)"><g className="doodle-sway">
                <path d="M12 0 L0 12 L12 24 M28 0 L40 12 L28 24" data-color="blue" strokeWidth="1.5" />
                <path d="M24 -2 L16 26" data-color="teal" strokeWidth="1" />
            </g></g>
            <g transform="translate(1100, 90)"><g className="doodle-pulse" style={{ animationDelay: "1.2s" }}>
                <path d="M4 18 Q12 10 20 18 M0 14 Q12 4 24 14" data-color="green" strokeWidth="1.2" />
                <circle cx="12" cy="20" data-fill-color="green" fill="hsl(var(--pencil-dark))" r="1.5" />
            </g></g>
            <g transform="translate(380, 340)"><g className="doodle-sway" style={{ animationDelay: "2.5s" }}>
                <path d="M0 0 L15 10 L0 20 M18 20 L35 20" data-color="orange" strokeWidth="1.3" />
            </g></g>
            <g transform="translate(1050, 580)"><g className="doodle-pulse" style={{ animationDelay: "3.8s" }}>
                <rect data-color="purple" height="24" rx="2" strokeWidth="1.5" width="24" x="6" y="6" />
                <rect data-color="purple" height="12" rx="1" strokeWidth="1" width="12" x="12" y="12" />
                <path d="M12 6 V0 M18 6 V0 M24 6 V0 M12 30 V36 M18 30 V36 M24 30 V36 M6 12 H0 M6 18 H0 M6 24 H0 M30 12 H36 M30 18 H36 M30 24 H36" data-color="teal" strokeWidth="1" />
            </g></g>
            <g transform="translate(500, 610)"><g className="doodle-sway" style={{ animationDelay: "4.2s" }}>
                <circle cx="4" cy="4" data-color="red" r="3" strokeWidth="1.2" />
                <circle cx="20" cy="4" data-color="green" r="3" strokeWidth="1.2" />
                <circle cx="4" cy="28" data-color="blue" r="3" strokeWidth="1.2" />
                <path d="M4 7 V25" data-color="red" strokeWidth="1.2" />
                <path d="M7 6 Q12 12 17 6" data-color="orange" strokeWidth="1.2" />
            </g></g>
            <g transform="translate(900, 340)"><g className="doodle-spin-slow">
                <circle cx="14" cy="14" data-color="gold" r="5" strokeWidth="1.2" />
                <path d="M14 0 V4 M14 24 V28 M0 14 H4 M24 14 H28" data-color="gold" strokeWidth="1.5" />
                <path d="M4 4 L7 7 M21 21 L24 24 M4 24 L7 21 M24 4 L21 7" data-color="orange" strokeWidth="1.2" />
            </g></g>
            <g transform="translate(640, 400)"><g className="doodle-float" style={{ animationDelay: "2s" }}>
                <ellipse cx="15" cy="6" data-color="blue" rx="15" ry="6" strokeWidth="1.2" />
                <path d="M0 6 V24 M30 6 V24" data-color="blue" strokeWidth="1.2" />
                <ellipse cx="15" cy="24" data-color="teal" rx="15" ry="6" strokeWidth="1.2" />
            </g></g>
            <g transform="translate(1080, 220)"><g className="doodle-spin-slow" style={{ animationDirection: "reverse" }}>
                <circle cx="16" cy="16" data-fill-color="blue" fill="hsl(var(--pencil-dark))" r="3" strokeWidth="0" />
                <ellipse cx="16" cy="16" data-color="teal" rx="16" ry="6" strokeWidth="1" />
                <ellipse cx="16" cy="16" data-color="blue" rx="16" ry="6" strokeWidth="1" transform="rotate(60 16 16)" />
                <ellipse cx="16" cy="16" data-color="purple" rx="16" ry="6" strokeWidth="1" transform="rotate(-60 16 16)" />
            </g></g>
            <g transform="translate(350, 100)"><g className="doodle-float" style={{ animationDelay: "3s" }}>
                <path d="M8 24 Q0 24 0 18 Q0 12 8 12 Q8 4 18 4 Q26 4 28 10 Q36 10 36 18 Q36 24 28 24 Z" data-color="blue" strokeWidth="1.2" />
            </g></g>
            <g transform="translate(200, 620)"><g className="doodle-sway" style={{ animationDelay: "1.8s" }}>
                <path d="M6 0 L4 20 M14 0 L12 20 M0 6 L18 6 M0 14 L18 14" data-color="pink" strokeWidth="1.3" />
            </g></g>
            <g transform="translate(1150, 140)"><g className="doodle-sway" style={{ animationDelay: "5s" }}>
                <ellipse cx="10" cy="14" data-color="red" rx="8" ry="10" strokeWidth="1.2" />
                <path d="M2 10 L-4 4 M18 10 L24 4 M2 18 L-4 24 M18 18 L24 24 M10 4 V-2" data-color="red" strokeWidth="1" />
                <circle cx="7" cy="11" data-fill-color="red" fill="hsl(var(--pencil-dark))" r="1.5" strokeWidth="0" />
                <circle cx="13" cy="11" data-fill-color="red" fill="hsl(var(--pencil-dark))" r="1.5" strokeWidth="0" />
            </g></g>
            <g transform="translate(580, 280)"><g className="doodle-pulse" style={{ animationDelay: "0.8s" }}>
                <path d="M0 0 L0 20 L6 15 L12 24 L15 22 L9 13 L16 11 Z" data-color="orange" strokeWidth="1" />
            </g></g>
            <g transform="translate(40, 450)"><g className="doodle-float" style={{ animationDelay: "4.5s" }}>
                <rect data-color="gold" height="14" rx="2" strokeWidth="1.3" width="16" x="2" y="10" />
                <path d="M5 10 V6 Q10 -2 15 6 V10" data-color="gold" strokeWidth="1.2" />
                <circle cx="10" cy="18" data-fill-color="purple" fill="hsl(var(--pencil-dark))" r="2" strokeWidth="0" />
            </g></g>
            <g transform="translate(780, 110)"><g className="doodle-pulse" style={{ animationDelay: "2.2s" }}>
                <path d="M12 0 L4 14 L10 14 L8 26 L18 10 L12 10 Z" data-color="gold" strokeWidth="1.2" />
            </g></g>
            <g transform="translate(760, 530)"><g className="doodle-sway" style={{ animationDelay: "3.5s" }}>
                <path d="M8 0 Q0 0 0 8 L0 12 Q-4 16 0 20 L0 24 Q0 32 8 32 M24 0 Q32 0 32 8 L32 12 Q36 16 32 20 L32 24 Q32 32 24 32" data-color="purple" strokeWidth="1.3" />
            </g></g>
            <g transform="translate(1000, 640)"><g className="doodle-sway" style={{ animationDelay: "1.5s" }}>
                <circle cx="10" cy="10" data-color="teal" r="9" strokeWidth="1.3" />
                <path d="M16 16 L24 24" data-color="teal" strokeWidth="1.8" />
            </g></g>
            <g transform="translate(560, 140)"><g className="doodle-pulse" style={{ animationDelay: "0.3s" }}>
                <path d="M10 6 Q10 0 5 0 Q0 0 0 5 Q0 10 10 18 Q20 10 20 5 Q20 0 15 0 Q10 0 10 6 Z" data-color="red" strokeWidth="1.1" />
            </g></g>
            <g transform="translate(40, 280)"><g className="doodle-float" style={{ animationDelay: "5.5s" }}>
                <rect data-color="green" height="18" rx="3" strokeWidth="1.2" width="22" x="0" y="0" />
                <rect data-color="green" height="12" rx="2" strokeWidth="0.8" width="16" x="3" y="2" />
            </g></g>
            <g transform="translate(150, 200)"><g className="doodle-spin-slow">
                <path d="M10 0 V20 M0 10 H20 M3 3 L17 17 M17 3 L3 17" data-color="orange" strokeWidth="1" />
            </g></g>
            <g transform="translate(1100, 480)"><g className="doodle-float" style={{ animationDelay: "1s" }}>
                <path d="M0 16 L14 8 L28 16 L14 24 Z" data-color="blue" strokeWidth="1.1" />
                <path d="M0 12 L14 4 L28 12" data-color="teal" strokeWidth="1.1" />
                <path d="M0 8 L14 0 L28 8" data-color="green" strokeWidth="1.1" />
            </g></g>
        </g>
        <g opacity="0.16">
            <ellipse cx="300" cy="350" fill="hsl(0 0% 60%)" rx="20" ry="8" />
            <ellipse cx="950" cy="250" fill="hsl(0 0% 60%)" rx="15" ry="6" />
            <ellipse cx="600" cy="550" fill="hsl(0 0% 60%)" rx="18" ry="7" />
        </g>
    </svg>
));

BackgroundDoodles.displayName = "BackgroundDoodles";

export default BackgroundDoodles;