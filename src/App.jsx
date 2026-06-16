import Internships from "./components/Internships";
import profile from "./assets/profile.jpeg";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-6 pt-24"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                B K Charan
              </h1>

              <h2 className="mt-4 text-2xl md:text-3xl text-cyan-400 font-semibold">
                Software Engineer | Full Stack Developer
              </h2>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Passionate Software Engineer specializing in Full-Stack
                Development, Backend Engineering, and AI-powered solutions.
                Experienced in building scalable web applications, secure APIs,
                and cloud-ready systems using Python, React, JavaScript, SQL,
                and Linux.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
                >
                  View Projects
                </a>

                <a
  href="/resume/BK_Charan_Resume.pdf"
  download
  className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
>
  Download Resume
</a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 space-y-3 text-gray-300">
                <p>📧 charannaidu1682003@gmail.com</p>
                <p>📍 Bengaluru, Karnataka</p>
                <p>📱 +91 8310332348</p>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/BKCharan"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800 px-5 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/charanbk16/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800 px-5 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex justify-center">
              <img
                src={profile}
                alt="B K Charan"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              />
            </div>

          </div>
        </section>

        {/* Portfolio Sections */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Internships />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />

      </div>
    </>
  );
}

export default App;