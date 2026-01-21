import React from 'react';
import { User, Award, TrendingUp, Users, DollarSign, Truck, Globe } from 'lucide-react';

const Leadership = () => {
    const teamMembers = [
        {
            name: "Mr. Suresh Arun",
            role: "Chairman",
            description: "Provides strategic leadership and long-term vision for the organization’s renewable energy initiatives. With a strong commitment to sustainability, he guides the mission to support the global transition toward solar and green power solutions.",
            icon: <Award className="w-6 h-6 text-emerald-600" />
        },
        {
            name: "Ms. Hannah Suresh",
            role: "Managing Director",
            description: "Leads overall operations and strategic execution within the solar sector. She focuses on driving project excellence, innovation, and scalable clean energy solutions while ensuring regulatory compliance.",
            icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
        },
        {
            name: "Mr. Halim Shah Harlem Shahnon Bin Abdullah",
            role: "Chief Executive Officer (CEO)",
            description: "Responsible for defining strategic direction, overseeing solar project development, and ensuring successful execution across EPC and operations. His leadership emphasizes innovation and sustainable energy growth.",
            icon: <Globe className="w-6 h-6 text-emerald-600" />
        },
        {
            name: "Ms. Divya Tammineedi",
            role: "Executive Director",
            description: "Plays a key role in strategic planning, operational management, and execution of solar projects. She contributes to strengthening governance, internal processes, and performance across renewable energy operations.",
            icon: <User className="w-6 h-6 text-emerald-600" />
        },
        {
            name: "Mr. Ashok Chutkey",
            role: "Whole-Time Director",
            description: "Oversees day-to-day operations and ensures effective implementation of solar project plans. He focuses on timely execution, quality assurance, safety standards, and regulatory compliance.",
            icon: <User className="w-6 h-6 text-emerald-600" />
        },
        {
            name: "Ms. Aarthi Bose",
            role: "Director – Human Resources",
            description: "Leads people strategy for the solar business. She focuses on talent acquisition, capability building, safety culture, and aligning human capital with the company’s renewable energy vision.",
            icon: <Users className="w-6 h-6 text-emerald-600" />
        },
        {
            name: "Mr. Ajay Agarwal",
            role: "Director – Finance (CFO)",
            description: "Responsible for financial strategy, project financing, budgeting, and risk management. He ensures financial discipline, transparency, and long-term sustainability of solar investments.",
            icon: <DollarSign className="w-6 h-6 text-emerald-600" />
        },
        {
            name: "Mr. Larry",
            role: "Vice President – Logistics",
            description: "Manages supply chain and logistics operations critical to solar project execution. He ensures efficient procurement, transportation, and deployment of solar equipment.",
            icon: <Truck className="w-6 h-6 text-emerald-600" />
        },
        {
            name: "Mr. Aldrin Joseph Thomas",
            role: "Vice President – Business Development",
            description: "Leads growth initiatives, strategic partnerships, and market expansion in the solar energy sector. He focuses on client relationships and scaling renewable energy opportunities.",
            icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
        }
    ];

    return (
        <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">
                        Our Team
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Leadership & Vision
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
                        Driving the global transition toward solar and green power solutions with expertise and integrity.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border-t-4 border-emerald-500 flex flex-col"
                        >
                            <div className="p-8 flex-1">
                                {/* Header of Card */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="h-12 w-12 bg-emerald-50 rounded-lg flex items-center justify-center">
                                        {member.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium text-emerald-600 mb-4 uppercase tracking-wider">
                                    {member.role}
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </div>

                            {/* Optional Footer/Link area for card */}
                            {/* <div className="bg-slate-50 px-8 py-4 border-t border-slate-100">
                                <a href="#" className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors">
                                    View Profile &rarr;
                                </a>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;