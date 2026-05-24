import { services } from "../data/Services";

const Services = () => {
  return (
    <section className="relative px-8 py-20 bg-slate-50 overflow-hidden">
      {/* Optional faint background decorative element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-end mb-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Our Services</h2>
            <p className="text-lg text-slate-600 mt-2">End to End Construction <span className="text-purple-600 font-semibold">Solution</span></p>
          </div>
          <button className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 transition">
            View All Services →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="flex gap-6 rounded-2xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-md transition group">
              <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-2xl group-hover:bg-purple-100 transition">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                <div className="mt-3">
                  <span className="text-sm text-purple-600 font-semibold cursor-pointer hover:text-purple-700">Learn More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
