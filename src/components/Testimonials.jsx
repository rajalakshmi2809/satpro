import { useState } from "react";
import { Testimonials as testimonials } from "../data/Testimonials";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative px-8 py-20 bg-gradient-to-br from-white via-purple-50 to-fuchsia-50 overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(238,232,255,0.7),_transparent_70%)] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Our Clients</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">What Our Clients Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Active Card */}
          <div className="rounded-3xl bg-purple-50/50 p-10 md:p-14 shadow-sm border border-purple-100 relative text-center transition-all duration-500 ease-in-out">
            <div className="text-purple-600 text-6xl mb-6 leading-none font-serif">"</div>
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-medium mb-10 transition-opacity duration-300">
              {testimonials[activeIndex].review}
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 overflow-hidden rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center text-xl font-bold text-slate-500 transition-all duration-300">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-base">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-slate-500 font-medium mt-0.5">Satisfied Client</p>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button 
              onClick={prev} 
              className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-200 text-purple-600 hover:bg-purple-100 hover:scale-105 active:scale-95 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-2xl font-light">←</span>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <span 
                  key={idx} 
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${activeIndex === idx ? 'w-10 bg-purple-600 shadow-sm' : 'w-2.5 bg-purple-200 hover:bg-purple-400'}`}
                ></span>
              ))}
            </div>

            <button 
              onClick={next} 
              className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-200 text-purple-600 hover:bg-purple-100 hover:scale-105 active:scale-95 transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-2xl font-light">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
