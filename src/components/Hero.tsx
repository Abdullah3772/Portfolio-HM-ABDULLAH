import { Github, Linkedin, Mail, Phone, Download, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-blob -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl animate-blob animation-delay-2000 top-40 right-20"></div>
        <div className="absolute w-96 h-96 bg-teal-400/20 dark:bg-teal-600/20 rounded-full blur-3xl animate-blob animation-delay-4000 -bottom-20 left-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Info */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full animate-bounce-slow">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient animate-fade-in-up">
              Hayaththu Mohammathu Abdullah
            </h1>

            {/* Roles */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {[
                { title: 'Frontend Developer', color: 'blue' },
                { title: 'React Developer', color: 'cyan' },
                { title: 'Backend Developer', color: 'teal' },
              ].map((role, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up delay-${i * 200}`}
                >
                  <Code2
                    className={`w-4 h-4 inline mr-2 text-${role.color}-600 dark:text-${role.color}-400`}
                  />
                  {role.title}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl animate-fade-in-up delay-600">
              Aspiring Full-Stack Developer passionate about building efficient, scalable, and user-friendly web applications. Currently pursuing BHSc (Hons) in Health Information & Communication Technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up delay-800">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-blue-600 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in-up delay-1000">
              {[
                { icon: <Github className="w-6 h-6" />, href: 'https://github.com/Abdullah3772', color: 'text-gray-700 dark:text-gray-300' },
                { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/hm-abdullah-7a3949388', color: 'text-blue-600 dark:text-blue-400' },
                { icon: <Mail className="w-6 h-6" />, href: 'mailto:abdullah0754520pp@gmail.com', color: 'text-cyan-600 dark:text-cyan-400' },
                { icon: <Phone className="w-6 h-6" />, href: 'tel:+94759817361', color: 'text-teal-600 dark:text-teal-400' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transform transition-all duration-300 ${social.color} animate-fade-in-up delay-${1200 + i * 200}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center animate-fade-in-up delay-1400">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img
                  src="profile.jpg"
                
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl animate-bounce-slow">
                11+ Years<br />Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
