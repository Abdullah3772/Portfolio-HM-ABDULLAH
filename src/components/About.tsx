import { User, Target, Heart, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { title: 'Years Experience', value: '11+', subtitle: 'Professional Tailor', color: 'from-purple-500 to-pink-500', icon: Award },
    { title: 'Projects', value: '5+', subtitle: 'Web Applications', color: 'from-cyan-500 to-teal-500', icon: Award },
    { title: 'Languages', value: '3', subtitle: 'Tamil, Sinhala, English', color: 'from-teal-500 to-blue-500', icon: Award },
    { title: 'Technologies', value: '10+', subtitle: 'Frontend & Backend', color: 'from-purple-500 to-blue-500', icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-700">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: About Details */}
          <div className="space-y-6 animate-fade-in-left">
            {[
              {
                icon: User,
                bg: 'bg-purple-100 dark:bg-purple-900/30',
                title: 'Who I Am',
                desc: 'I am an undergraduate student at Gampaha Wickramarachchi University of Indigenous Medicine, pursuing BHSc (Hons) in Health Information & Communication Technology.'
              },
              {
                icon: Heart,
                bg: 'bg-pink-100 dark:bg-pink-900/30',
                title: 'What I Love',
                desc: 'Passionate about web development and UI/UX design, building modern, responsive web apps using React.js, PHP, and MySQL.'
              },
              {
                icon: Target,
                bg: 'bg-teal-100 dark:bg-teal-900/30',
                title: 'My Mission',
                desc: 'Transforming ideas into practical digital solutions that make a real difference in people’s lives.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className={`${item.bg} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transform transition-all duration-500 shadow-lg animate-pulse`}>
                  <item.icon className="w-6 h-6 text-purple-600 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {stats.map((stat, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${stat.color} p-8 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up`} style={{ animationDelay: `${idx * 150}ms` }}>
                <stat.icon className="w-12 h-12 text-white mb-4 animate-bounce" />
                <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-white/90">{stat.title}</p>
                <p className="text-white/70 text-sm mt-1">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
