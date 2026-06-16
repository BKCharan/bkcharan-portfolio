function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Leadership & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400 text-center mb-6">
              Class Representative
            </h3>

            <p className="text-gray-300 text-center leading-8">
              Served as Class Representative for two consecutive years and coordinated academic activities between students and faculty members.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400 text-center mb-6">
              Project Head
            </h3>

            <p className="text-gray-300 text-center leading-8">
              Led the final-year project team and managed project planning, execution, task allocation and collaboration.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400 text-center mb-6">
              🥈 Celeste 2K24
            </h3>

            <p className="text-gray-300 text-center leading-8">
              Secured 2nd Prize in Quiz Competition, demonstrating analytical thinking, technical knowledge and problem-solving skills.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;