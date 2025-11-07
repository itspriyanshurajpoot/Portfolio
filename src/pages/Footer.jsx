// ...existing code...
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          <div>
            <h3 className="text-lg font-semibold text-white">Portfolio</h3>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
                Crafted with care by Priyanshu Singh.
            </p>
          </div>

          <nav className="flex flex-col text-sm">
            <a href="#home" className="py-1 hover:text-white">Home</a>
            <a href="#about" className="py-1 hover:text-white">About</a>
            <a href="#projects" className="py-1 hover:text-white">Projects</a>
            <a href="#skills" className="py-1 hover:text-white">Skills</a>
            <a href="#contact" className="py-1 hover:text-white">Contact</a>
          </nav>

          <div className="text-sm">
            <div className="mb-2">Contact</div>
            <div className="flex flex-col gap-1">
              <a href="tel:+919334784482" className="hover:text-white">📞 +91 9334784482</a>
              <a href="mailto:priyanshurajrajput93@gmail.com" className="hover:text-white">✉️ priyanshurajraput93@gmail.com</a>
              <div className="pt-2">
                <a href="https://www.instagram.com/its_priyanshu_rajpoot/" target="_blank" rel="noreferrer" className="mr-3 hover:text-white">Instagram</a>
                <a href="https://www.linkedin.com/in/priyanshu-kumar-singh-20a4b82a9/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <div>© {year} Priyanshu Singh. All rights reserved.</div>
          <div className="mt-3 sm:mt-0">
            <a href="#top" className="hover:text-white">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// ...existing code...