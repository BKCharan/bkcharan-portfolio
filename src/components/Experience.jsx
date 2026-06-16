function Experience() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Techplement Solutions Pvt. Ltd.",
      duration: "May 2024 - Jul 2024",
      description:
        "Developed responsive web applications, improved UI/UX, and collaborated with development teams to deliver modern web solutions."
    },
    {
      title: "Embedded & Automotive Systems Intern",
      company: "EchoBrains",
      duration: "Oct 2024 - Nov 2024",
      description:
        "Worked on embedded systems concepts and automotive technologies while gaining industry-level exposure."
    },
    {
      title: "Industrial Training Program",
      company: "InTrainz",
      duration: "Sep 2023 - Nov 2023",
      description:
        "Completed industry-oriented training focused on practical engineering and software development concepts."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-3xl shadow-xl"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {exp.title}
              </h3>

              <p className="text-lg text-white mt-2">
                {exp.company}
              </p>

              <p className="text-gray-400 mt-1">
                {exp.duration}
              </p>

              <p className="text-gray-300 mt-4 leading-7">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;