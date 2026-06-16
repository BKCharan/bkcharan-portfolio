function Certifications() {
  const certifications = [
    {
      title: "Applied Industrial IoT",
      issuer: "L&T EduTech",
      year: "2024",
      image: "/certificates/applied-industrial-iot.jpg",
    },
    {
      title: "Artificial Intelligence & Edge Computing",
      issuer: "L&T EduTech",
      year: "2024",
      image: "/certificates/ai-edge-computing.jpg",
    },
    {
      title: "Cyber Physical Systems for Industrial Applications",
      issuer: "L&T EduTech",
      year: "2024",
      image: "/certificates/cyber-physical-systems.jpg",
    },
    {
      title: "5G Technology for Smarter & Secure Connectivity",
      issuer: "L&T EduTech",
      year: "2025",
      image: "/certificates/5g-technology.jpg",
    },
    {
      title: "Python Project for Beginners",
      issuer: "Great Learning",
      year: "2024",
      image: "/certificates/python-project.jpg",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-cyan-400">
                {cert.title}
              </h3>

              <p className="mt-3 text-gray-300">
                {cert.issuer}
              </p>

              <p className="text-gray-400">
                {cert.year}
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

export default Certifications;