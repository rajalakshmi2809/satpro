import { useState } from "react";
import heroImg from "../assets/media__1779632841318.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 px-8 py-20">
      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side: Text and Form */}
        <div>
          <div className="space-y-4 mb-8">
            <p className="text-sm uppercase tracking-widest text-purple-700 font-bold">
              Let's Build Something Extraordinary
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Start Your <span className="text-purple-600">Dream</span> Project Today
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-white/70 px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-white transition-all hover:shadow-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-white/70 px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-white transition-all hover:shadow-sm"
              />
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-white/70 px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-white transition-all hover:shadow-sm"
              />
              <select
                name="project"
                value={formData.project}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-200 bg-white/70 px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-white transition-all appearance-none hover:shadow-sm"
              >
                <option value="">Type of Project</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Interior">Interior</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Brief about your requirement..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full rounded-lg border border-slate-200 bg-white/70 px-5 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent focus:bg-white transition-all hover:shadow-sm"
            />

            <button
              type="submit"
              className="w-1/2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Building Image */}
        <div className="hidden lg:block relative h-full">
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src={heroImg} 
                  alt="Modern futuristic building" 
                  className="w-full h-full object-cover"
                />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
