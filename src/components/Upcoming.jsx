import { useState } from "react";
import { upcomingProjects } from "../data/Upcoming";
import toast from 'react-hot-toast';

const Upcoming = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? upcomingProjects
    : upcomingProjects.filter((p) => p.category === active);

  return (
    <section className="relative px-8 py-20 overflow-hidden bg-linear-to-br from-purple-50 via-white to-fuchsia-50">
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col mb-10">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">What we build</p>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Iconic Upcoming Projects</h2>
              <p className="max-w-2xl text-base text-slate-600">Discover our carefully curated upcoming developments in residential, commercial, and mixed-use spaces.</p>
            </div>
            
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
            <button 
              onClick={() => {
                if (active === "All") {
                  toast.success("More upcoming projects will be added soon!", { icon: '🏗️' });
                } else {
                  setActive("All");
                }
              }} 
              className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 active:scale-95 transition shrink-0"
            >
              View All Projects →
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-4xl shadow-2xl border border-white/80 bg-white/90 backdrop-blur-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="relative h-96 w-full overflow-hidden rounded-4xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/10 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              </div>
              
              <div className="relative p-6 bg-white/90">
                <span className="inline-flex items-center justify-center rounded-full bg-purple-100 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-purple-700 mb-4 shadow-sm">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{project.desc}</p>
                <div className="mt-6 flex items-center gap-3 text-purple-600 font-semibold">
                  <span>Explore</span>
                  <span className="text-2xl">↗</span>
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
