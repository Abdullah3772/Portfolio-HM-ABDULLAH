import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Online Mental Health Counseling System',
      description: 'A web-based platform designed to provide online mental health counseling and support services.',
      technologies: ['React.js', 'CSS'],
      liveUrl: 'https://fanciful-beijinho-d31535.netlify.app/',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 via-purple-500 to-pink-500'
    },
    {
      title: 'Smart Biotelemetry Helmet Application',
      description: 'A smart safety and health monitoring web application concept for riders, integrating accident detection and health-related features.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://abdullah3772.github.io/Smart-Biotelemetry-Helmet-App/',
      githubUrl: 'https://github.com/Abdullah3772/Smart-Biotelemetry-Helmet-App',
      image: 'https://images.pexels.com/photos/6069725/pexels-photo-6069725.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-cyan-500 via-teal-500 to-green-500'
    },
    {
      title: 'TechCon 2025 Event Schedule Website',
      description: 'An event schedule website created to display and manage conference information in a clean and responsive layout.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://abdullah3772.github.io/TechCon-2025-Event-Schedule/',
      githubUrl: 'https://github.com/Abdullah3772/TechCon-2025-Event-Schedule',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-500 via-pink-500 to-orange-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-700">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full animate-pulse"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mt-4">
            Explore my latest work in web development and see how I transform ideas into reality
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transform hover:-translate-y-4 transition-all duration-700 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Animated Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-30 animate-gradient-slow`}
              ></div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 z-10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:shadow-2xl transform transition-all duration-500"
                  >
                    <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:scale-125 hover:shadow-2xl transform transition-all duration-500"
                  >
                    <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </a>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-blue-500 dark:group-hover:text-cyan-400">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-500">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-white/80 via-white/50 to-white/20 dark:from-gray-900/20 dark:via-gray-800/30 dark:to-gray-700/20 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:scale-110 hover:shadow-lg transform transition-all duration-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Animated Border */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <a
            href="https://github.com/Abdullah3772"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 animate-text"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
