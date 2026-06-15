import React from "react";
import { FaPaperPlane, FaUser, FaCaretDown } from "react-icons/fa";

function Header({ onSignInClick, onCreateAccountClick, onAddListingClick, onLogoClick }) {
  return (
    <header className="w-full self-stretch bg-[#050505] border-b border-zinc-900 py-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 w-full">
        {/* Logo */}
        <div 
          onClick={onLogoClick} 
          className="cursor-pointer select-none font-serif text-[2.4rem] font-semibold tracking-wide flex items-center"
        >
          <span className="text-[#c2185b]">Tru</span>
          <span className="text-white">Escorts</span>
        </div>

        {/* Action Buttons Column */}
        <div className="flex flex-col items-end gap-3 self-end sm:self-auto w-full sm:w-auto">
          {/* Top row: Share and Sign in */}
          <div className="flex items-center gap-2">
            {/* Share button */}
            <button 
              onClick={onSignInClick}
              className="w-10 h-9 flex items-center justify-center bg-[#c2185b] hover:bg-[#a0134c] text-white rounded-[4px] transition-colors"
              title="Share"
            >
              <FaPaperPlane className="text-sm rotate-45 -translate-y-[1px]" />
            </button>
            
            {/* Sign in dropdown button */}
            <button 
              onClick={onSignInClick}
              className="h-9 px-4 flex items-center gap-2 bg-[#c2185b] hover:bg-[#a0134c] text-white rounded-[4px] text-sm font-medium transition-colors"
            >
              <FaUser className="text-xs" />
              <span>Sign in</span>
              <FaCaretDown className="text-xs" />
            </button>
          </div>

          {/* Bottom row: Create Account and Add a Listing */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onCreateAccountClick || onSignInClick}
              className="h-9 px-4 bg-[#c2185b] hover:bg-[#a0134c] text-white text-xs font-semibold rounded-full tracking-wider transition-colors"
            >
              Create Account
            </button>
            <button 
              onClick={onAddListingClick || onSignInClick}
              className="h-9 px-4 bg-[#c2185b] hover:bg-[#a0134c] text-white text-xs font-semibold rounded-full tracking-wider transition-colors"
            >
              Add a Listing
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
