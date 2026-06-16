function Certifications() {
  const certs = [
    "Applied Industrial IoT",
    "Artificial Intelligence & Edge Computing",
    "Cyber Physical Systems for Industrial Applications",
    "5G Technology for Smarter & Secure Connectivity",
    "Python Project for Beginners",
    "Web Development Internship",
    "Embedded & Automotive Systems",
    "Industrial Training Program"
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Certifications
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 flex items-center justify-center text-center min-h-[180px] hover:scale-105 transition duration-300"
            >
              <h3 className="text-white font-semibold leading-7">
                {cert}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;