import { Link } from "react-router";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function CtaSection() {
  const ctaRef = useScrollAnimation();

  return (
    <section className="section">
      <div className="container">
        <div
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className="cta-banner animate-on-scroll scale-in"
        >
          <div className="cta-banner__orb" />
          <div className="cta-banner__content">
            <h2 className="cta-banner__title">
              Ready to start
              <br />
              your project?
            </h2>
            <p className="cta-banner__sub">
              {"Let's build something remarkable together."}
            </p>
          </div>
          <Link to="/contact" className="btn btn--white btn--lg">
            Start a Project →
          </Link>
        </div>
      </div>
    </section>
  );
}
