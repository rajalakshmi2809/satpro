import heroImg from "../assets/hero_apartments_dusk.png";
import { FaClock, FaBuilding, FaUsers, FaTrophy } from "react-icons/fa";
import toast from 'react-hot-toast';

const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center pt-32 pb-16 px-8 min-h-[800px] flex items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Decorative overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-transparent bg-gradient-to-r from-black/80 md:via-black/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-6 z-10 py-10">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-white mb-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
              EST. 2008 • PREMIUM CONSTRUCTION
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 leading-[1.1] drop-shadow-sm pb-2">
              Building Future Landmarks
            </h1>
            
            <p className="text-lg text-slate-200 max-w-lg leading-relaxed font-medium">
              We build modern and smart spaces that inspire and enhance your life with our premium architecture and construction services.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4 group">
              <button 
                onClick={() => toast.success("Consultation scheduling coming soon!", { icon: '📅' })}
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 active:scale-95 transition-all duration-300"
              >
                Get Free Consultation
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group/btn rounded-full flex items-center gap-3 border border-white/30 bg-black/40 px-6 py-4 text-sm font-bold text-white hover:bg-black/60 hover:shadow-lg hover:border-white/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md"
              >
                View Projects
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-900 text-xs transition-transform group-hover/btn:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Stats */}
          <div className="relative z-10 mt-10 lg:mt-0 flex flex-col justify-center gap-4 px-4 h-full">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '15+', label: 'Years of Experience', icon: <FaClock /> },
                  { value: '250+', label: 'Projects Delivered', icon: <FaBuilding /> },
                  { value: '500+', label: 'Happy Clients', icon: <FaUsers /> },
                  { value: '12', label: 'Awards Won', icon: <FaTrophy /> }
                ].map((item) => (
                  <div key={item.label} className="group flex items-center gap-4 rounded-2xl bg-black/40 backdrop-blur-md p-5 shadow-lg border border-white/20 hover:bg-black/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">{item.value}</h3>
                      <p className="text-[10px] uppercase font-bold text-slate-300 tracking-wider leading-tight mt-0.5">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

        </div>
      </div>

      {/* Bottom Features Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-purple-500 py-3.5 border-t border-white/20">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-2 sm:px-8 overflow-hidden">
          {[
            "LUXURY VILLAS",
            "COMMERCIAL PROJECTS",
            "INTERIOR CONSTRUCTION",
            "SMART HOMES",
            "RENOVATION",
            "ARCHITECTURE"
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-1.5 md:gap-3 text-white text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-bold tracking-wider sm:tracking-widest whitespace-nowrap">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full shadow-sm shrink-0"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
