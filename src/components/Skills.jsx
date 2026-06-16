function Skills() {
  const skills = [
    "Python",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React.js",
    "SQL",
    "Linux",
    "FastAPI",
    "Git",
    "GitHub",
    "Cloud Computing",
    "Artificial Intelligence"
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl text-center text-lg font-semibold hover:scale-105 hover:bg-cyan-500 hover:text-black transition duration-300 shadow-lg"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;