import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Insightful Technology",
      logo: "/logos/insightful.png", // Replace with actual logo path
      role: "Software Engineer",
      period: "08.2022 - Present",
      highlights: [
        "Developed a real-time dashboard with React, TypeScript, and Tailwind, improving data visualization for 30+ clients.",
        "Achieved 50% faster load times through virtualized rendering and efficient state management.",
        "Established Jest & React Testing Library, boosting front-end test coverage from 15% to 65%.",
        "Worked with designers & product teams to enhance UX, reducing customer complaints by 90%.",
      ],
    },
    {
      company: "Samsung", 
      logo: "/logos/samsung.png", // Replace with actual logo path
      role: "Data Analyst Intern",
      period: "08.2018 - 08.2018",
      highlights: [
        "Enhanced adaptability and cross-cultural communication by collaborating with diverse international teams.",
        "Attended global meetings and documented key insights to better understand market trends and business strategies.",
      ],
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">Professional Experience</h2>
        </div>

   {/* Timeline */}
   <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6">
              {/* Timeline Indicator & Logo */}
              <div className="flex items-center gap-4 -ml-8">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <img src={exp.logo} alt={exp.company} className="w-28 h-24 object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">{exp.role}</h3>
                <p className="text-gray-600">{exp.company} | {exp.period}</p>
                {/* Experience Highlights */}
                <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="leading-relaxed">{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;