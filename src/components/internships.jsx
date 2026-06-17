function Internships() {
  const internships = [
    {
      title: "Web Development Intern",
      company: "Techplement Solutions Pvt. Ltd.",
      certificate: "/internships/web-development.pdf",
    },
    {
      title: "Embedded & Automotive Systems Intern",
      company: "EchoBrains",
      certificate: "/internships/embedded-automotive.pdf",
    },
    {
      title: "Industrial Training Program",
      company: "InTrainz",
      certificate: "/internships/industrial-training.pdf",
    },
    {
      title: "Python Developer Intern",
      company: "Codec Technologies",
      certificate: "/internships/python-developer-intern.pdf",
    },
  ];

  return (
    <section
      id="internships"
      className="py-20 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Internship Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {internships.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {item.company}
              </p>

              <a
                href={item.certificate}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 bg-cyan-500 hover:bg-cyan-600 text-black px-4 py-2 rounded-lg font-semibold transition"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;