import heroImg from "../assets/media__1779632841318.jpg";

const Hero = () => {
  return (
    <section 
      className="relative overflow-hidden bg-cover bg-center pt-32 pb-16 px-8 min-h-[800px] flex items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Decorative overlay for text readability */}
      <div className="absolute inset-0 bg-white/70 md:bg-transparent bg-gradient-to-r from-white/95 md:via-white/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Side: Text Content */}
          <div className="space-y-6 z-10 py-10">
            <div className="inline-block text-xs font-bold uppercase tracking-widest text-slate-800 mb-2 px-3 py-1 bg-white/50 backdrop-blur-md rounded-full">
              EST. 2008 • PREMIUM CONSTRUCTION
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Building Future Landmarks
            </h1>
            
            <p className="text-lg text-slate-800 max-w-lg leading-relaxed font-medium">
              We build modern and smart spaces that inspire and enhance your life with our premium architecture and construction services.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300">
                Get Free Consultation
              </button>
              <button className="rounded-full flex items-center gap-3 border border-slate-300 bg-white/70 px-6 py-4 text-sm font-bold text-slate-900 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
                View Projects
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white text-xs transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Stats */}
          <div className="relative z-10 mt-10 lg:mt-0 flex flex-col justify-center gap-4 px-4 h-full">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '15+', label: 'Years of Experience', icon: '⏱️' },
                  { value: '250+', label: 'Projects Delivered', icon: '🏢' },
                  { value: '500+', label: 'Happy Clients', icon: '👥' },
                  { value: '12', label: 'Awards Won', icon: '🏆' }
                ].map((item) => (
                  <div key={item.label} className="group flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur-md p-5 shadow-lg border border-white/60 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-slate-900">{item.value}</h3>
                      <p className="text-[10px] uppercase font-bold text-slate-600 tracking-wider leading-tight mt-0.5">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
