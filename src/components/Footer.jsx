import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-[#e2e2e2] bg-white">
      <div className="mx-auto max-w-[1220px] px-6 py-10 text-sm text-[#6f6f6f] md:px-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© Parashift Technologies PVT. LTD.</p>
        <a
          href="https://www.parashifttech.com/privacy-policy"
          target="_blank"
          rel="noreferrer"
          className="text-left text-black transition-colors hover:text-[#ff5f58] md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;