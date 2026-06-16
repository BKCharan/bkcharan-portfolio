function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact Me
        </h2>

        <div className="bg-slate-800 p-10 rounded-3xl">

          <p className="text-lg text-gray-300">
            📧 charannaidu1682003@gmail.com
          </p>

          <p className="text-lg text-gray-300 mt-4">
            📱 +91 8310332348
          </p>

          <p className="text-lg text-gray-300 mt-4">
            📍 Bengaluru, Karnataka
          </p>

          <div className="flex justify-center gap-4 mt-8">

            <a
              href="https://github.com/BKCharan"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/charanbk16"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-400 px-6 py-3 rounded-xl"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;