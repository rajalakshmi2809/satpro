import modernVillaImg from "../assets/modern_villa_1779629718947.png";

const Vission = () => {
  return (
    <section className="px-8 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-14 items-center">
        
        {/* Left Side: Text and Features */}
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Our Story & Vision</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Where Vision Meets Craft</h2>
          <p className="text-lg leading-relaxed text-slate-600 max-w-xl">
            Since 2008, ARKHE has been at the forefront of premium construction and architectural design. We merge traditional craftsmanship with cutting-edge technology, creating structures that are not just buildings — but living legacies.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-center gap-4 rounded-xl bg-slate-50 border border-slate-100 p-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-xl shadow-sm">🌿</span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Sustainable Build</h3>
                <p className="text-xs text-slate-500">Eco-friendly design</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-slate-50 border border-slate-100 p-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-xl shadow-sm">👷</span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Expert Engineers</h3>
                <p className="text-xs text-slate-500">Certified team</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-slate-50 border border-slate-100 p-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-xl shadow-sm">💎</span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Premium Quality</h3>
                <p className="text-xs text-slate-500">Finest materials</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-xl bg-slate-50 border border-slate-100 p-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-xl shadow-sm">⏱️</span>
              <div>
                <h3 className="text-sm font-bold text-slate-900">Timely Delivery</h3>
                <p className="text-xs text-slate-500">On-schedule projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Badge */}
        <div className="relative mt-10 lg:mt-0">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={modernVillaImg}
              alt="Modern house"
              className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
            />
          </div>
          {/* Overlapping Badge */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-md border border-white/50 max-w-[150px] text-center">
             <div className="text-3xl mb-2">⭐</div>
             <p className="text-sm font-bold text-slate-900 leading-tight">15+ Years <span className="block text-purple-600 font-semibold text-xs mt-1">Experience</span></p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Vission;
