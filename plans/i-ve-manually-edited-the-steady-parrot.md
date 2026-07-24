# Plan: Build `<ProcessSection />` Sticky Scroll Tracker

## Context
The user pasted an architectural directive at `src/imports/pasted_text/process-section.tsx` describing a premium "Sticky Vertical Scroll Tracker" to replace the existing flat 4-step process grid in `Services.tsx`. The new component features 6 steps, a sticky left title column, a scrolling right timeline with a spine line, and IntersectionObserver-driven active/inactive states with Apple-style transitions.

---

## What Changes

### 1. Create `src/app/components/ProcessSection.tsx`

New self-contained component. Key implementation details:

**Data** — declare `PROCESS_STEPS` array (6 items) outside the component:
```ts
{ id, category, title, desc, icon }
// Steps: Discovery, Blueprinting, Production, Quality Assurance, Deployment, Scale
// Icons: Search, Map, Code, Gauge, Rocket, TrendingUp (from lucide-react)
```

**State & refs:**
```ts
const [activeStep, setActiveStep] = useState(0);
const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
```

**IntersectionObserver** (inside `useEffect`):
- `rootMargin: "-40% 0px -40% 0px"` — fires when a step enters the middle band of the viewport
- On intersection, calls `setActiveStep(index)`
- Observes each element in `stepRefs.current`

**DOM structure:**
```
<section py-32 bg-white font-['Plus_Jakarta_Sans']>
  <div max-w-7xl mx-auto px-6 grid grid-cols-12 gap-16 relative>

    <!-- Left: col-span-5 relative -->
    <div sticky top-40>
      "HOW WE WORK" label  (text-[11px] font-bold tracking-widest text-[#7C3AED] uppercase)
      "Our Process" h2     (text-6xl font-extrabold text-[#0F172A] tracking-tight)
      subtitle paragraph   (text-lg text-[#475569] mt-6 leading-relaxed max-w-md)
    </div>

    <!-- Right: col-span-7 relative -->
    <!-- Spine line: absolute left-0 top-0 bottom-0 w-px bg-[#E2E8F0] -->
    {PROCESS_STEPS.map((step, index) => (
      <div ref=... min-h-[60vh] flex items-start relative>   // last item omits min-h

        <!-- Node on spine: absolute left-[-16px] top-0 w-8 h-8 rounded-full border-2 -->
        // active:  border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.4)]
        // inactive: border-[#E2E8F0]

        <!-- Content: ml-16, transition-all duration-500 ease-in-out -->
        // active:  opacity-100 translate-y-0
        // inactive: opacity-30 translate-y-4

          Watermark ID  (text-8xl font-extrabold text-[#F8FAFC] absolute -top-8 -left-4 z-0)
          Category row  (text-[11px] font-bold text-[#7C3AED] tracking-widest + icon size-5)
          Title         (text-3xl font-bold text-[#0F172A] mt-4 mb-4 relative z-10)
          Description   (text-lg text-[#475569] leading-relaxed relative z-10 max-w-lg)
      </div>
    ))}
  </div>
</section>
```

**Mobile fallback** — below `md:` breakpoint, collapse to single-column stacked layout (remove grid, remove sticky, show all steps at full opacity) so the section is usable on mobile even though the design is desktop-first.

---

### 2. Update `src/app/pages/Services.tsx`

- Add import: `import ProcessSection from "../components/ProcessSection";`
- Replace the entire `{/* Process */}` `<section>` block (lines 103–131) with `<ProcessSection />`.
- The local `PROCESS` array (lines 49–54) can be removed since `ProcessSection` owns its own data.
- Remove the now-unused `processRef` from `useScrollAnimation()` calls.

---

## Files Modified
| File | Action |
|------|--------|
| `src/app/components/ProcessSection.tsx` | **Create** |
| `src/app/pages/Services.tsx` | **Edit** — swap process section, remove local PROCESS array |

## Files Unchanged
- `src/app/data.ts` — `processSteps` export is already unused; leave it (no breakage)
- `src/styles/fonts.css` — Plus Jakarta Sans is already imported
- All other pages/components

---

## Verification
1. Navigate to `/services` — scroll down past the services grid; the "Our Process" heading should stick on the left while the 6 right-column steps scroll through, each lighting up purple as it enters the center of the viewport.
2. Confirm smooth opacity + translate transition between inactive (dim) and active (bright) states.
3. Resize to mobile — all 6 steps should render stacked and fully visible (no opacity-30 on mobile).
