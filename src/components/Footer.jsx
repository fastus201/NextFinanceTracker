"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 shadow-slate-gradient-top px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Few quick links */}
        <div className="flex space-x-4 text-sm">
            © {new Date().getFullYear()} NextFinance. All rights reserved.
        </div>
       
      </div>

    </footer>
  );
}
