import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800 font-sans">

            {/* Top Section: Main Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Company Info */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            Selah Solar
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-400">
                            A joint venture with <span className="text-white font-medium">Israel Gigawatt Company</span>.
                            Pioneering Telangana's largest floating solar projects and delivering Mega/Giga scale
                            energy solutions via the BOT model.
                        </p>
                    </div>

                    {/* Column 2: Our Solutions */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Our Solutions</h3>
                        <ul className="space-y-4">
                            <FooterLink text="Floating Solar Systems" />
                            <FooterLink text="Solar EPC Services" />
                            <FooterLink text="BOT (Build-Operate-Transfer)" />
                            <FooterLink text="Mega-Scale Grid Projects" />
                            <FooterLink text="Operation & Maintenance" />
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <FooterLink text="About Us" />
                            <FooterLink text="Israel Partnership" />
                            <FooterLink text="Projects Gallery" />
                            <FooterLink text="Sustainability" />
                            <FooterLink text="Contact Support" />
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                <span className="text-sm text-gray-400">
                                    Corporate Office, Hyderabad,<br /> Telangana, India.
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-sm text-gray-400">+91 000 000 0000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                                <span className="text-sm text-gray-400">info@selahsolar.com</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 pt-2 mt-10">
                            <SocialIcon icon={<Linkedin size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="bg-gray-950 py-6 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Selah Solar. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Helper Components for clean code
const FooterLink = ({ text }) => (
    <li>
        <a href="#" className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 text-[10px]">▶</span>
            {text}
        </a>
    </li>
);

const SocialIcon = ({ icon }) => (
    <a href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
        {icon}
    </a>
);

export default Footer;