const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-tight cursor-pointer hover:scale-105 transition-transform">
          <span className="text-slate-900">ARK</span><span className="text-[#c19d60]">HE</span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {["Home", "About Us", "Projects", "Our Services", "Insights"].map((link) => (
            <li key={link} className="text-sm font-semibold text-slate-700 hover:text-purple-600 cursor-pointer relative group transition-colors">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-7 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300">
          Get Consultation
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
