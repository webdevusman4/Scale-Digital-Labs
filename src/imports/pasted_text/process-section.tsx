System Role & Architectural Directive:
Act as an Elite Frontend UI/UX Engineer specializing in Next.js and Tailwind CSS. Your objective is to build a premium, interactive "Our Process" component (<ProcessSection/>). We are building a "Sticky Vertical Scroll Tracker" strictly optimized for desktop viewports first.

Core Visual Identity & Theming:

Typography: font-['Plus_Jakarta_Sans'] applied globally to the component.

Brand Colors: Dark Slate (#0F172A), Muted Slate (#475569), Electric Purple (#7C3AED), Radiant Cyan (#2DD4BF), and faint border slate (#E2E8F0).

Animation Vibe: Apple-style fluid transitions, easing, and glowing states. No jarring jumps.

Phase 1: Data Architecture & Dependencies
Initialize the component file at src/app/components/ProcessSection.tsx.
Import the useEffect, useState, and useRef hooks from React.
Import the following Lucide icons: Search, Map, Code, Gauge, Rocket, TrendingUp.

Declare this exact immutable data array outside the component function:

JavaScript
const PROCESS_STEPS = [
  { id: "01", category: "DISCOVERY", title: "Data Extraction & Scoping", desc: "We strip away the fluff, figure out exactly who your users are, and define the exact features to prevent scope creep.", icon: Search },
  { id: "02", category: "BLUEPRINTING", title: "System Architecture", desc: "Mapping out the database tables and logic flow using UML diagrams before writing a single line of frontend code.", icon: Map },
  { id: "03", category: "PRODUCTION", title: "Engineering & Build", desc: "Spinning up the Next.js environment, writing strictly typed logic, and building modular components using Tailwind CSS.", icon: Code },
  { id: "04", category: "QUALITY ASSURANCE", title: "Optimization & Testing", desc: "Stress-testing mobile responsiveness, running Lighthouse speed tests, and ensuring sub-millisecond load times.", icon: Gauge },
  { id: "05", category: "DEPLOYMENT", title: "Zero-Downtime Handoff", desc: "Executing a live production release and handing over all source code, environment variables, and admin credentials.", icon: Rocket },
  { id: "06", category: "SCALE", title: "Iteration & Support", desc: "Continuous monitoring, revenue scaling optimizations, and technical support to keep your new digital infrastructure running flawlessly.", icon: TrendingUp }
];
Phase 2: React State & Intersection Observer Logic
Inside the ProcessSection function, set up the logic to track which step is currently active based on the user's scroll position.

Create a state variable: const [activeStep, setActiveStep] = useState(0);.

Create a ref array to hold references to the individual step DOM nodes: const stepRefs = useRef<(HTMLDivElement | null)[]>([]);.

Implement a useEffect containing an IntersectionObserver.

Configure the observer with threshold: 0.5 (or rootMargin: "-40% 0px -40% 0px"). As each step container enters the middle of the viewport, the observer must update the activeStep state to that specific item's index.

Phase 3: The DOM Structure & Grid Layout
Create the main <section> wrapper with heavy vertical padding (py-32 bg-white).
Inside, define the master grid container: div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-16 relative".

The Left Column (The Sticky Anchor):

Span this column across 5 grid tracks: col-span-5 relative.

Inside, create a sticky container: div className="sticky top-40".

Add the category label: "HOW WE WORK" utilizing text-[11px] font-bold tracking-widest text-[#7C3AED] uppercase mb-4.

Add the massive section title: "Our Process" utilizing text-6xl font-extrabold text-[#0F172A] tracking-tight.

Below the title, add a brief paragraph: "A rigorous, engineering-first methodology designed to eliminate risk and guarantee scalable results." utilizing text-lg text-[#475569] mt-6 leading-relaxed max-w-md.

The Right Column (The Scrolling Timeline):

Span this column across the remaining 7 tracks: col-span-7 relative.

The Master Spine Line: Create an absolute positioned vertical line running down the very left edge of this column. absolute left-0 top-0 bottom-0 w-px bg-[#E2E8F0].

Map over the PROCESS_STEPS array to generate the step containers.

Assign the respective ref to each mapped container: ref={(el) => (stepRefs.current[index] = el)}.

Each step container must have massive vertical spacing to force a long scroll duration: flex items-start relative min-h-[60vh]. (The last item should not have this huge min-height so the section can end cleanly).

Phase 4: Active vs Inactive State Styling (The Magic)
For each mapped step, you must apply conditional Tailwind classes based on whether index === activeStep. Apply transition-all duration-500 ease-in-out to all changing elements.

1. The Timeline Node (The Circle on the Spine):

Position it exactly over the absolute spine line: absolute left-[-16px] top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-white transition-colors duration-500.

Inactive state: border-[#E2E8F0] text-[#475569].

Active state: border-[#7C3AED] text-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.4)].

Inside the circle, display a tiny dot or leave it empty, but it must light up purple when active.

2. The Step Content Block:

Push the content away from the spine: ml-16.

Wrap the content block in a div that controls opacity and scale based on active state.

Inactive state: opacity-30 translate-y-4.

Active state: opacity-100 translate-y-0.

Content Layout:

Watermark ID: Display the step.id (01, 02, etc.) in a massive, ultra-faint font (text-8xl font-extrabold text-[#F8FAFC] absolute -top-8 -left-4 z-0).

Top Row: Flex container aligning the step.category (text-[11px] font-bold text-[#7C3AED] tracking-widest uppercase) and the step.icon component (size 20, color matching the active/inactive state).

Title: text-3xl font-bold text-[#0F172A] mt-4 mb-4 relative z-10.

Description: text-lg text-[#475569] leading-relaxed relative z-10 max-w-lg.

Final Output Requirement: Return the complete, production-ready React component code without omitting any Tailwind utility classes.