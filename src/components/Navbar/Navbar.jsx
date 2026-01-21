import React, { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Projects', href: '#projects' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled || isOpen
                        ? 'bg-white text-slate-900 shadow-md py-4'
                        : 'bg-transparent text-white py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Logo Area */}
                        <div className="flex items-center space-x-2">
                            <Sun className={`w-8 h-8 ${isScrolled || isOpen ? 'text-emerald-600' : 'text-emerald-400'}`} />
                            <span className="text-2xl font-bold tracking-wide">
                                Selah<span className={isScrolled || isOpen ? 'text-emerald-600' : 'text-emerald-400'}>Solar</span>
                            </span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#quote"
                                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${isScrolled
                                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                        : 'bg-white text-emerald-600 hover:bg-emerald-50'
                                    }`}
                            >
                                Get Quote
                            </a>
                        </div>

                        {/* Mobile Burger Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="focus:outline-none transition-transform duration-200 active:scale-95"
                            >
                                {isOpen ? (
                                    <X className="w-8 h-8" />
                                ) : (
                                    <Menu className="w-8 h-8" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-emerald-600 hover:bg-slate-50 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#quote"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 w-full block text-center px-5 py-3 rounded-lg text-base font-bold bg-emerald-600 text-white hover:bg-emerald-700"
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>
            </nav>

            {/* Full Screen Hero Section */}
            <div className="relative h-screen w-full overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop')",
                    }}
                >
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg">
                        Powering a <span className="text-emerald-400">Greener</span> Future
                    </h1>
                    <p className="max-w-2xl text-lg sm:text-xl text-slate-100 mb-10 font-light leading-relaxed drop-shadow-md">
                        Sustainable energy solutions tailored for industrial and residential needs.
                        Join the revolution today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1">
                            Explore Solutions
                        </button>
                        <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all">
                            Watch Video
                        </button>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                        <div className="w-1 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;