import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Insightful Technology",
      logo: "/logos/insightful.png",
      role: "Software Engineer",
      period: "Aug 2022 – Present",
      highlights: [
        "Built and maintained full-stack React/TypeScript & C#/.NET applications for legal & fintech clients, improving initial load times by 50% and render speed by 80%.",
        "Modernized legacy UI library & API services, cutting bundle size and load times by 30% and eliminating 30% of duplicated code.",
        "Designed secure REST APIs with audit trails and compliance controls, reducing data-related incidents by 40%.",
        "Championed CI/CD and Jest testing, raising front-end coverage to 65% and slashing hotfix frequency by 40%."
      ],
    },
    {
      company: "Samsung SDS",
      logo: "/logos/samsung.png",
      role: "Data Analyst Intern",
      period: "Aug 2018 - Sep 2018",
      highlights: [
        "Developed and documented Big Data monitoring protocols in Samsung’s data center, enhancing system reliability.",
        "Collaborated with senior leadership and international teams to capture market insights and optimize network operations."
      ],
    },
  ];

  return (
    <section className="py-20 px-4  bg-background text-foreground">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 px-2">
          <h2 className="text-3xl font-semibold text-foreground">Professional Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 pl-6 space-y-12 w-full">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start gap-6 w-full"
            >
              {/* Timeline Indicator & Logo */}
              <div className="flex items-center md:flex-col gap-4 -ml-8 md:ml-0 md:mr-8">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 md:mt-0"></div>
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-24 h-20 object-contain mx-auto md:mx-0"
                />
              </div>

              {/* Content with fixed max width for readability */}
              <div className="flex-1 max-w-3xl">
                <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                <p className="mt-1 text-foreground/75">{exp.company} | {exp.period}</p>
                <ul className="mt-4 space-y-2 text-foreground list-disc list-inside">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="leading-relaxed">
                      {highlight}
                    </li>
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
