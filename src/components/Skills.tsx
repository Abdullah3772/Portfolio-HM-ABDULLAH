import { Code2, Database, Wrench, Users, Briefcase } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'PHP', 'MySQL',
    'Node.js', 'Bootstrap', 'Tailwind CSS', 'Git & GitHub'
  ];

  const tools = [
    'Visual Studio Code', 'Figma', 'Postman', 'GitHub Pages', 'Netlify'
  ];

  const softSkills = [
    'Teamwork', 'Problem Solving', 'Time Management', 'Communication Skills',
    'UI/UX Design', 'Documentation', 'Presentation'
  ];

  const skillCategories = [
    { title: 'Technical Skills', icon: Code2, items: technicalSkills, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'Tools & Platforms', icon: Wrench, items: tools, gradient: 'from-cyan-500 to-teal-500' },
    { title: 'Soft Skills', icon: Users, items: softSkills, gradient: 'from-teal-500 to-blue-500' },
  ];

  const progressSkills = [
    { name: 'PHP', value: 85, gradient: 'from-blue-600 to-cyan-600' },
    { name: 'MySQL', value: 80, gradient: 'from-cyan-600 to-teal-600' },
    { name: 'Node.js', value: 70, gradient: 'from-teal-600 to-blue-600' },
    { name: 'React.js', value: 90, gradient: 'from-blue-600 to-cyan-600' },
    { name: 'HTML/CSS/JS', value: 95, gradient: 'from-cyan-600 to-teal-600' },
    { name: 'UI/UX Design', value: 85, gradient: 'from-teal-600 to-blue-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-700">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Skill Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up">
              {/* Radial glow */}
              <div className={`absolute -top-6 -left-6 w-20 h-20 rounded-full blur-3xl bg-gradient-to-r ${cat.gradient} opacity-30 animate-pulse`}></div>
              <div className={`absolute -bottom-6 -right-6 w-20 h-20 rounded-full blur-3xl bg-gradient-to-r ${cat.gradient} opacity-30 animate-pulse`}></div>

              <div className={`w-16 h-16 bg-gradient-to-br ${cat.gradient} rounded-xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-all duration-300 shadow-lg`}>
                <cat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">{cat.title}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {cat.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-white/80 to-white/40 dark:from-gray-900/20 dark:to-gray-800/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:scale-110 hover:shadow-xl transform transition-all duration-300 cursor-default animate-fade-in-up"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {progressSkills.map((skill, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 transition-all duration-500 animate-fade-in-up">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.value}%</span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full animate-progress`} style={{ width: `${skill.value}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
