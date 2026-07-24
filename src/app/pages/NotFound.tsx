import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="pt-44 pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="font-display font-black bg-gradient-to-r from-violet-600 to-orange-500 bg-clip-text text-transparent block mb-6"
          style={{ fontSize: "clamp(6rem, 20vw, 14rem)", lineHeight: 1 }}
        >
          404
        </p>
        <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-6">
          Page not found
        </h1>
        <p className="text-xl text-neutral-500 font-light mb-12 max-w-md">
          {"Looks like this page took a detour. Let's get you back on track."}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0D0D0D] text-white font-semibold px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
