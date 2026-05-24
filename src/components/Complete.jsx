import { useState } from "react";
import { completedProjects } from "../data/Completedprjects";

const Complete = () => {
  const [active, setActive] = useState("All Projects");

  const categories = ["All Projects", "Residential", "Commercial", "Interior", "Villa"];

  const filtered =
    active === "All Projects"
      ? completedProjects
      : completedProjects.filter((p) => p.category === active);

  return (
    <section className="px-8 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-10">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Our Works</p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Completed Projects</h2>
            
            <button 
              onClick={() => {
                if (active === "All Projects") {
                  alert("More completed projects will be added soon!");
                } else {
                  setActive("All Projects");
                }
              }} 
              className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 active:scale-95 transition shrink-0"
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
            <div className="group rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative min-h-[400px] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <img
                src={filtered[0].image}
                alt={filtered[0].name}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute bottom-8 left-8 right-8 text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold mb-3 border border-white/30 text-white">
                  {filtered[0].category}
                </span>
                <h3 className="text-4xl font-bold mb-2">{filtered[0].name}</h3>
                <p className="text-sm text-slate-300 font-medium">2024 • 15,000 sq ft</p>
              </div>
            </div>
          )}

          {/* Small Cards */}
          <div className="grid grid-cols-2 gap-4">
            {filtered.slice(1).map((project) => (
              <div key={project.id} className="group rounded-2xl overflow-hidden shadow-md border border-slate-200 relative aspect-square hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform transition-transform duration-300 group-hover:-translate-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-slate-300 mb-1 font-bold">{project.category}</p>
                  <h4 className="text-sm font-bold leading-tight">{project.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-1">2023 • 5,000 sq ft</p>
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
