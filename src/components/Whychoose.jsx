const WhyChoose = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Projects Delivered', value: '250+' },
    { label: 'Certified Engineers', value: '100%' },
    { label: 'On-Time Completion', value: '98%' },
    { label: 'Sustainable Material', value: 'A+' }
  ];

  return (
    <section className="px-8 py-20 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-2">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Build On <span className="text-purple-600">Trust</span> <br />
              Driven By <span className="text-purple-600">Excellence</span>
            </h2>
            <p className="text-slate-600 mt-4 text-sm leading-relaxed">
              We deliver premium construction solutions with unwavering commitment to quality and transparency.
            </p>
          </div>

          <div className="lg:w-2/3 flex flex-wrap lg:flex-nowrap justify-between gap-6 w-full">
            {stats.map((stat, index) => (
              <div key={stat.label} className={`flex flex-col items-center lg:items-start text-center lg:text-left ${index !== stats.length - 1 ? 'lg:border-r lg:border-slate-200 lg:pr-8' : ''}`}>
                <h3 className="text-4xl lg:text-5xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-xs uppercase font-semibold tracking-wider text-slate-500 mt-3 max-w-[100px] leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
