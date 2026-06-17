function Experience() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Techplement Solutions Pvt. Ltd.",
      duration: "May 2024 - Jul 2024",
      description:
        "Developed responsive web applications, improved UI/UX, and collaborated with development teams to deliver modern web solutions.",
    },

    {
      title: "Embedded & Automotive Systems Intern",
      company: "EchoBrains",
      duration: "Oct 2024 - Nov 2024",
      description:
        "Worked on embedded systems concepts and automotive technologies while gaining industry-level exposure.",

      certificate: "/internships/embedded-automotive.pdf",
    },

    {
      title: "Industrial Training Program",
      company: "InTrainz",
      duration: "Sep 2023 - Nov 2023",
      description:
        "Completed industrial training under industry mentors and gained practical exposure to real-world technologies.",

      certificate: "/internships/industrial-training.pdf",
    },

    {
      title: "Python Developer Intern",
      company: "Codec Technologies",
      duration: "Feb 2025 - Apr 2025",
      description:
        "Worked on Python development projects, problem-solving, and software development practices.",

      certificate: "/internships/python-developer-intern.pdf",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Experience
        </h2>

        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-cyan-500/20 transition"
            >
              <h3 className="text-3xl font-bold text-cyan-400">
                {exp.title}
              </h3>

              <p className="text-xl mt-2">
                {exp.company}
              </p>

              <p className="text-gray-400 mt-1">
                {exp.duration}
              </p>

              <p className="mt-6 text-gray-300 leading-relaxed">
                {exp.description}
              </p>

              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-6 bg-cyan-500 hover:bg-cyan-600 text-black px-5 py-2 rounded-xl font-semibold transition"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;