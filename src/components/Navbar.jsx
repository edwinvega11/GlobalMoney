import React, { useState } from "react";

const navLinks = [
  { label: "Nosotros", href: "#hero" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Descubrenos", href: "#product" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <img src="/GM-Logo-1.png" alt="Global Money Logo" className="h-20 md:h-24 w-auto" />
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="w-7 h-7 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-200 hover:text-blue-400 transition px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                tabIndex={0}
                aria-label={link.label}
                onClick={(e) => handleNavClick(e, link.href)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleNavClick(e, link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-black/80 backdrop-blur-sm rounded-b-xl shadow-lg z-50 fixed left-0 right-0 top-0 mt-[80px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block text-gray-200 hover:text-blue-400 transition px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                tabIndex={0}
                aria-label={link.label}
                onClick={(e) => handleNavClick(e, link.href)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleNavClick(e, link.href);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar; 