function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          About Me
        </h2>

        <div className="bg-slate-800 p-8 rounded-3xl shadow-xl">

          <p className="text-lg text-gray-300 leading-8">
            I am a passionate Software Engineer specializing in
            Full-Stack Development, Backend Engineering,
            Cloud Computing and AI-powered applications.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-6">
            With strong experience in Python, JavaScript,
            React, SQL and Linux, I enjoy transforming
            complex problems into scalable software solutions.
          </p>

          <p className="text-lg text-gray-300 leading-8 mt-6">
            Through internships, industry training,
            and leadership roles, I have developed technical
            expertise and collaborative skills that help
            deliver impactful results.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;