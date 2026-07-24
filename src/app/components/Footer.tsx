import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer bg-gray-50 border-t border-gray-100 dark:bg-[#0f172a] dark:border-gray-800">
      <div className="container">
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold block mb-4">
              ScaleDigital<span className="gradient-text">Labs</span>
            </span>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
              A digital studio crafting bold products for ambitious brands — from strategy to pixel-perfect launch.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/work" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Work</Link></li>
              <li><Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} ScaleDigitalLabs. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
