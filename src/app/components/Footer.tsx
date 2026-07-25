import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>
      <div className="container">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold block mb-4">
              ScaleDigital<span className="gradient-text">Labs</span>
            </span>
            <p style={{ color: "var(--fg-muted)" }} className="max-w-sm mb-6">
              A digital studio crafting bold products for ambitious brands — from strategy to pixel-perfect launch.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--fg)" }}>Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/work" className="footer__link">Work</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-semibold mb-4" style={{ color: "var(--fg)" }}>Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="footer__link">Twitter</a></li>
              <li><a href="#" className="footer__link">LinkedIn</a></li>
              <li><a href="#" className="footer__link">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="footer__copy">
            © {new Date().getFullYear()} ScaleDigitalLabs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="footer__link">Privacy Policy</a>
            <a href="#" className="footer__link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
