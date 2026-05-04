import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] selection:bg-red-200 selection:text-red-700">
      <aside className="hidden lg:flex fixed left-0 top-0 z-50 h-screen w-16 border-r border-[#e0e0e0] bg-[#f7f7f7] flex-col items-center justify-between py-8">
        <button type="button" className="text-[#6f6f6f] hover:text-black transition-colors">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <span className="[writing-mode:vertical-rl] rotate-180 text-sm tracking-wide text-black">Get a Quote</span>
      </aside>

      <div className="lg:pl-16">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      </div>
    </div>
  );
};

export default MainLayout;