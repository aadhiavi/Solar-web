import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from "../../assets/floating.jpg";
import Image1 from "../../assets/ground-base.jpg";
import Image2 from '../../assets/roof-top.jpg';
import Image3 from '../../assets/maintain.jpg';

const SolarSolutions = () => {
    const solutions = [
        {
            id: 5,
            title: "Floating Solar",
            description: "Innovative photovoltaic systems installed on water bodies to conserve land and improve efficiency through natural cooling.",
            image: Image,
            link: "#enquiry"
        },
        {
            id: 1,
            title: "Ground Mounted Solar",
            description: "Large-scale utility projects optimized for maximum yield on open terrain.",
            image: Image1,
            link: "#enquiry"
        },
        {
            id: 2,
            title: "Roof Top Solar",
            description: "Efficient energy solutions transforming unused roof space into power generators.",
            image: Image2,
            link: "#enquiry"
        },
        // {
        //     id: 3,
        //     title: "Solar Carports",
        //     description: "Dual-purpose structures providing shade for vehicles while generating clean energy.",
        //     image: "https://images.unsplash.com/photo-1592416808796-033108d1a1b1?q=80&w=800&auto=format&fit=crop", // Placeholder for carport
        //     link: "#enquiry"
        // },
        {
            id: 4,
            title: "Operation & Maintenance",
            description: "Comprehensive monitoring and servicing to ensure peak performance and longevity.",
            image: Image3, // Placeholder for technician
            link: "#enquiry"
        }
    ];

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
                        Services
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Our Solar Solutions
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                        Customized renewable energy infrastructure designed for efficiency and durability.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution) => (
                        <div
                            key={solution.id}
                            className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Image Container with Overlay Effect */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={solution.image}
                                    alt={solution.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                    {solution.title}
                                </h3>
                                <p className="text-slate-500 text-sm mb-6 flex-grow">
                                    {solution.description}
                                </p>

                                {/* Button */}
                                <a
                                    href={solution.link}
                                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-slate-50 text-emerald-700 font-medium rounded-lg border border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300 group-hover:shadow-md"
                                >
                                    Enquiry Now
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolarSolutions;