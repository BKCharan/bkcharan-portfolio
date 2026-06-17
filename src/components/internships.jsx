function Internships() {
  const internships = [
    {
      title: "Embedded & Automotive Systems",
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

        <div className="grid md:grid-cols-3 gap-8">
          {internships.map((item, index) => (
            <a
              key={index}
              href={item.certificate}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 p-6 rounded-2xl hover:scale-105 hover:bg-slate-700 transition duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {item.company}
              </p>

              <div className="mt-4 text-cyan-400 font-semibold">
                View Certificate →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;