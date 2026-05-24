import { Testimonials as testimonials } from "../data/Testimonials";

const Testimonials = () => {
  return (
    <section className="relative px-8 py-20 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(238,232,255,0.7),_transparent_70%)] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-left">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Our Clients</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">What Our Clients Say</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.id} className="rounded-2xl bg-purple-50/50 p-8 shadow-sm border border-purple-100 relative">
              <div className="text-purple-600 text-5xl mb-4 leading-none font-serif">"</div>
              <p className="text-slate-700 leading-relaxed font-medium mb-8">
                {item.review}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-sm font-bold text-slate-500">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Satisfied Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls matching design */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-200 text-purple-600 hover:bg-purple-100 transition">
            <span className="text-xl">←</span>
          </button>
          <div className="flex gap-2">
            <span className="h-2 w-8 rounded-full bg-purple-600"></span>
            <span className="h-2 w-2 rounded-full bg-purple-200"></span>
            <span className="h-2 w-2 rounded-full bg-purple-200"></span>
          </div>
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-200 text-purple-600 hover:bg-purple-100 transition">
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
