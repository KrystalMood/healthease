import { Link } from "@remix-run/react";

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-emerald-900 py-12">
      <div className="max-w-7xl mx-auto px-4 flex items-start justify-between text-white">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">HealthEase</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <Link to="/profile" className="hover:text-emerald-200">Profile</Link>
          <Link to="/jaminan-kesehatan" className="hover:text-emerald-200">Jaminan Kesehatan</Link>
          <Link to="/layanan" className="hover:text-emerald-200">Layanan</Link>
          <Link to="/informasi-publik" className="hover:text-emerald-200">Informasi Publik</Link>
          <Link to="/tautan" className="hover:text-emerald-200">Tautan</Link>
        </div>

        {/* About Us */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-bold mb-2">About Us</h3>
          <Link to="/our-story" className="hover:text-emerald-200">Our Story</Link>
          <Link to="/why-healthease" className="hover:text-emerald-200">Why HealthEase?</Link>
          <Link to="/testimonial" className="hover:text-emerald-200">Testimonial</Link>
        </div>

        {/* Support */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-xl font-bold mb-2">Support</h3>
          <Link to="/faq" className="hover:text-emerald-200">FAQ</Link>
          <Link to="/contact" className="hover:text-emerald-200">Contact Us</Link>
          <Link to="/help" className="hover:text-emerald-200">Help Center</Link>
        </div>

        {/* Social and Policies */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Placeholder boxes for social icons */}
              <div className="w-8 h-8 bg-white/20 rounded hover:bg-white/30 cursor-pointer"></div>
              <div className="w-8 h-8 bg-white/20 rounded hover:bg-white/30 cursor-pointer"></div>
              <div className="w-8 h-8 bg-white/20 rounded hover:bg-white/30 cursor-pointer"></div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-sm">
            <Link to="/privacy" className="hover:text-emerald-200">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-emerald-200">Terms of Service</Link>
            <span>|</span>
            <Link to="/cookies" className="hover:text-emerald-200">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}