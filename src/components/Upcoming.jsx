import { useState } from "react";
import { upcomingProjects } from "../data/Upcoming";

const Upcoming = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? upcomingProjects
    : upcomingProjects.filter((p) => p.category === active);

  return (
    <section className="px-8 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-10">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">What we build</p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Iconic Upcoming Projects</h2>
            
            {/* Filter Tabs - Centered */}
            <div className="flex flex-wrap items-center bg-white rounded-full p-1 shadow-sm border border-slate-200 lg:mx-auto">
              {["All", "Residential", "Commercial"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                    active === cat
                      ? "bg-purple-500 text-white shadow-md"
                      : "text-slate-600 hover:text-purple-600"
                  }`}
                >
                  {cat === "All" ? "All Projects" : cat}
                </button>
              ))}
            </div>

            {/* View All Button */}
            <button className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition shrink-0">
              View All Projects →
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl shadow-lg border border-slate-200 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex justify-between items-end transform transition-transform duration-300 group-hover:-translate-y-2">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold mb-3 border border-white/30 text-white">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                  <p className="mt-1 text-sm text-slate-300 font-medium">{project.desc}</p>
                </div>
                {/* Arrow Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shrink-0 group-hover:bg-purple-500 group-hover:border-purple-500 transition-colors duration-300">
                  <span className="text-white text-lg transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upcoming;
