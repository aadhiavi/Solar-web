import React from 'react';
import { ArrowRight, Settings, Activity, Repeat } from 'lucide-react'; // Make sure to install lucide-react or use your own icons
import floating from "../../assets/floating1.jpg";

const SelahSolarFullPage = () => {
  // Placeholder images - Replace with your real assets
  const images = {
    floating: floating,
    israelTech: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
    megaPower: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  };

  return (
    <div className="w-full bg-white font-sans text-gray-900">
      
      {/* 1. HERO / TEXT SECTION */}
      <section className="relative py-20 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold tracking-wide uppercase">
            Joint Venture
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
          Selah Solar <span className="text-blue-600">&times;</span>Gigawatt Israel
        </h1>

        <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed space-y-6">
          <p>
            We are <strong className="text-gray-900">Selah Solar</strong>, ventured with the 
            <strong className="text-gray-900"> Israel Gigawatt</strong>. 
            We specialize in cutting-edge <strong>floating solar technology</strong>.
          </p>
          <p>
            We are currently executing <span className="bg-yellow-100 px-2 py-0.5 rounded font-bold text-gray-900">Telangana's largest floating solar energy project</span>. 
            Our mission is to add believable, substantial power generation capacity—scaling in 
            <strong> Mega (MW)</strong> watts—to the national grid.
          </p>
        </div>
      </section>

      {/* 2. THE "BOT" EXPLANATION SECTION (New Requirement) */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Operational Model: BOT</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We execute large-scale infrastructure projects using the 
              <strong> Build-Operate-Transfer</strong> framework to ensure efficiency and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Hidden on mobile) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gray-200 -z-10"></div>

            {/* B - BUILD */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center relative hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg text-2xl font-bold">
                B
              </div>
              <h3 className="text-xl font-bold mb-3">Build</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We handle the entire engineering, procurement, and construction (EPC) of the floating solar plant, ensuring world-class standards with Israeli technology.
              </p>
            </div>

            {/* O - OPERATE */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center relative hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-green-600 text-white rounded-full flex items-center justify-center mb-6 shadow-lg text-2xl font-bold">
                O
              </div>
              <h3 className="text-xl font-bold mb-3">Operate</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We manage the daily operations and maintenance of the facility for a set concession period, ensuring maximum power generation efficiency.
              </p>
            </div>

            {/* T - TRANSFER */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center relative hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-gray-800 text-white rounded-full flex items-center justify-center mb-6 shadow-lg text-2xl font-bold">
                T
              </div>
              <h3 className="text-xl font-bold mb-3">Transfer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                At the end of the agreement, ownership of the fully operational mega/giga plant is transferred to the government or entity at zero cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. IMAGE CARDS SECTION (From Previous Request) */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Project Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <ProjectCard 
            image={images.floating}
            title="Floating Solar Specialists"
            desc="Executing Telangana's largest floating solar project with advanced buoyancy systems."
            tag="Specialization"
          />

          <ProjectCard 
            image={images.israelTech}
            title="Israel Gigawatt Technology"
            desc="Ventured with global leaders to bring cutting-edge Israeli solar tech to Indian waters."
            tag="Partnership"
          />

          <ProjectCard 
            image={images.megaPower}
            title="Mega & Giga Scale Capacity"
            desc="Creating believable, massive scale power generation infrastructure for the future."
            tag="Capacity"
          />

        </div>
      </section>
    </div>
  );
};

// Sub-component for the Image Cards
const ProjectCard = ({ image, title, desc, tag }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md text-gray-800">
          {tag}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>
        <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group-hover:gap-3">
          Enquiry Now <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default SelahSolarFullPage;