import React from "react";

function Footer() {
  const links = [
    { name: "About Us", url: "#" },
    { name: "Contact Us", url: "#" },
    { name: "Terms of Use", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Maps", url: "#" }
  ];

  return (
    <footer className="w-full self-stretch bg-[#050505] border-t border-zinc-900 py-8 mt-auto">
      <div className="w-full flex flex-col items-start justify-center gap-4 px-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
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
        <p className="text-zinc-500 text-xs text-center">
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
