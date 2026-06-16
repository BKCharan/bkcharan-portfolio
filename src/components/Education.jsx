function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Education
        </h2>

        <div className="space-y-8">

          {/* B.Tech */}
          <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400">
              Bachelor of Technology (B.Tech) - Electronics & Communication Engineering
            </h3>

            <p className="text-lg text-white mt-2">
              Sri Venkateswara College of Engineering and Technology, Chittoor
            </p>

            <p className="text-gray-400 mt-1">
              Affiliated to JNTU Anantapur
            </p>

            <p className="text-gray-400 mt-1">
              2021 - 2025
            </p>

            <p className="text-gray-300 mt-3">
              CGPA: <span className="font-semibold">8.38 / 10</span>
            </p>
          </div>

          {/* Intermediate */}
          <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400">
              Intermediate (MPC)
            </h3>

            <p className="text-lg text-white mt-2">
              Sri Vivekananda Junior College, Chittoor
            </p>

            <p className="text-gray-400 mt-1">
              Mathematics • Physics • Chemistry
            </p>

            <p className="text-gray-400 mt-1">
              2019 - 2021
            </p>

            <p className="text-gray-300 mt-3">
              Score: <span className="font-semibold">875 / 1000</span>
            </p>
          </div>

          {/* Schooling */}
          <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400">
              Secondary School Education (SSC)
            </h3>

            <p className="text-lg text-white mt-2">
              Vidya Vihar E.M High School, Chittoor
            </p>

            <p className="text-gray-400 mt-1">
              2018 - 2019
            </p>

            <p className="text-gray-300 mt-3">
              GPA: <span className="font-semibold">10 / 10</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;