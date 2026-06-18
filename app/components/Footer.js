import React from "react";

function Footer() {
  const links = [
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "Terms of Use", url: "/terms" },
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Maps", url: "#" }
  ];

  return (
    <footer className="w-full self-stretch bg-[#050505] border-t border-zinc-900 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap  gap-x-8 gap-y-2 text-sm">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="text-[#fbc02d] hover:text-[#f57f17] font-medium tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-zinc-500 text-xs ">
          © 2026, powered by{" "}
          <a href="#" className="text-[#fbc02d] hover:underline">
            TruEscorts Verified Escort Directory
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
