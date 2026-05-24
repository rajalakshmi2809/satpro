import { useState } from "react";
import { completedProjects } from "../data/Completedprjects";
import toast from 'react-hot-toast';

const Complete = () => {
  const [active, setActive] = useState("All Projects");

  const categories = ["All Projects", "Residential", "Commercial", "Interior", "Villa"];

  const filtered =
    active === "All Projects"
      ? completedProjects
      : completedProjects.filter((p) => p.category === active);

  return (
    <section className="relative px-8 py-20 overflow-hidden bg-linear-to-br from-purple-50 via-white to-pink-50">
      <div className="pointer-events-none absolute left-0 top-16 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-10 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col mb-10">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Our Works</p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Completed Projects</h2>
              <p className="max-w-2xl text-base text-slate-600">Explore our portfolio of finished spaces built with precision, luxury finishes, and long-term performance.</p>
            </div>
            
            <button 
              onClick={() => {
                if (active === "All Projects") {
                  toast.success("More completed projects will be added soon!", { icon: '🏆' });
                } else {
                  setActive("All Projects");
                }
              }} 
              className="rounded-full border border-purple-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-lg shadow-purple-100/70 hover:bg-purple-50 active:scale-95 transition shrink-0"
            >
              Explore All Projects →
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition whitespace-nowrap ${
                active === cat
                  ? "bg-purple-500 text-white shadow-md"
                  : "bg-white text-slate-600 border border-slate-200 hover:text-purple-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[2fr_1.5fr] gap-6">
          {/* Main Large Card */}
          {filtered.length > 0 && (
            <div className="group relative overflow-hidden rounded-4xl shadow-2xl border border-white/80 bg-white/90 backdrop-blur-xl min-h-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden rounded-4xl">
                <img
                  src={filtered[0].image}
                  alt={filtered[0].name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/10 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="inline-flex items-center justify-center rounded-full bg-white/20 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-white mb-4 border border-white/30 backdrop-blur-md">
                  {filtered[0].category}
                </span>
                <h3 className="text-4xl font-bold mb-2">{filtered[0].name}</h3>
                <p className="text-sm text-slate-200 font-medium">2024 • 15,000 sq ft</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-100">
                  <span>See details</span>
                  <span className="text-xl">↗</span>
                </div>
              </div>
            </div>
          )}

          {/* Small Cards */}
          <div className="grid grid-cols-2 gap-4">
            {filtered.slice(1).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-[1.75rem] shadow-xl border border-white/70 aspect-square bg-white/90 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-slate-300 mb-1 font-bold">{project.category}</p>
                  <h4 className="text-sm font-bold leading-tight">{project.name}</h4>
                  <p className="text-[10px] text-slate-300 mt-1">2023 • 5,000 sq ft</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Complete;
