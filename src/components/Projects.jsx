function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Project 1 */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-bold text-cyan-400">
              VeriDelete Cloud
            </h3>

            <p className="text-gray-300 mt-4 leading-7">
              Privacy-Preserving Proof-Based Data Erasure System
              that enables secure verification of cloud data
              deletion while ensuring transparency and trust.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full">
                React.js
              </span>
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full">
                JavaScript
              </span>
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full">
                HTML5
              </span>
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full">
                CSS3
              </span>
            </div>

            <a
              href="https://github.com/BKCharan/clouderasex-verifiable-deletion"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold"
            >
              View Project
            </a>

          </div>

          {/* Project 2 */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-bold text-cyan-400">
              FPGA Multiplier
            </h3>

            <p className="text-gray-300 mt-4 leading-7">
              High-Speed Energy-Efficient Fixed-Point Signed
              Multiplier designed for FPGA-based DSP applications,
              focusing on performance optimization and reduced
              power consumption.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full">
                FPGA
              </span>
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full">
                Verilog
              </span>
              <span className="bg-cyan-500 text-black px-3 py-1 rounded-full">
                DSP
              </span>
            </div>

            <a
              href="https://github.com/BKCharan/fpga_multiplier"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold"
            >
              View Project
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;