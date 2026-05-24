
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f4f0ff] px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-4 mb-12">
          {/* Column 1: Logo & Info */}
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
              ARK<span className="text-slate-500">HE</span>
            </h1>
            <div className="text-slate-600 text-sm space-y-2 mb-6">
              <p>123 Architecture Blvd,</p>
              <p>New York, NY 10001</p>
              <p className="font-semibold text-slate-800 mt-2">info@arkhe.com</p>
              <p className="font-semibold text-slate-800">+1 234 567 8900</p>
            </div>
            <div className="flex items-center gap-3">
              {/* Social Icons */}
              <a href="#" className="w-8 h-8 rounded-full bg-[#9b51e0] flex items-center justify-center text-white hover:bg-purple-700 transition shadow-sm">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#9b51e0] flex items-center justify-center text-white hover:bg-purple-700 transition shadow-sm">
                <FaInstagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#9b51e0] flex items-center justify-center text-white hover:bg-purple-700 transition shadow-sm">
                <FaTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#9b51e0] flex items-center justify-center text-white hover:bg-purple-700 transition shadow-sm">
                <FaLinkedinIn size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#9b51e0] flex items-center justify-center text-white hover:bg-purple-700 transition shadow-sm">
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="font-bold text-slate-900 mb-5">COMPANY</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#" className="hover:text-purple-600 transition">Home</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Careers</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Terms</a></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-bold text-slate-900 mb-5">SERVICES</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li><a href="#" className="hover:text-purple-600 transition">Residential</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Commercial</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Interior Design</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Smart Homes</a></li>
              <li><a href="#" className="hover:text-purple-600 transition">Renovation</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-bold text-slate-900 mb-5">NEWSLETTER</h3>
            <p className="text-slate-600 text-sm mb-5 leading-relaxed">
              Subscribe to our architecture insights and updates.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="rounded-md bg-purple-500 px-4 py-2 text-sm font-semibold text-white hover:bg-purple-600 transition">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-200/60 pt-6 flex flex-col md:flex-row items-center justify-between text-slate-500 text-xs">
          <p>© 2024 ARKHE Construction & Architecture. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-purple-600">Privacy Policy</a>
            <a href="#" className="hover:text-purple-600">Terms</a>
            <a href="#" className="hover:text-purple-600">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
