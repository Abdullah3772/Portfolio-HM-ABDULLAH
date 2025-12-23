import { GraduationCap, Briefcase, Award, Trophy, Calendar } from 'lucide-react';

export default function Experience() {
  const education = [
    {
      degree: 'BHSc (Hons) in Health Information & Communication Technology',
      institution: 'Gampaha Wickramarachchi University of Indigenous Medicine',
      status: 'Currently Reading',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'School Education',
      institution: 'BT/BC Macan Markar National School, Eravur',
      location: 'Sri Lanka',
      icon: GraduationCap,
      gradient: 'from-cyan-500 to-teal-500'
    }
  ];

  const certifications = [
    'Computer Systems & Hardware',
    'MS Word, MS Excel, PowerPoint',
    'Software Systems Fundamentals'
  ];

  const achievements = [
    { title: 'School Prefect', icon: Award },
    { title: 'University Media Member', subtitle: 'Editor, Photographer, Videographer', icon: Award },
    { title: 'Hackathon Participant', icon: Trophy },
    { title: 'University Tech Clubs Member', icon: Award },
    { title: 'School Band Team Member', icon: Award },
    { title: 'National Meelad Competitions', subtitle: '2013, 2015, 2016', icon: Trophy },
    { title: 'Provincial Meelad Competition', subtitle: '2014', icon: Trophy },
    { title: 'Eravur Racing Pigeon Club', subtitle: 'Ranked 33 & 44', icon: Award }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-700">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-text">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Education & Certifications */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3 animate-fade-in-left">
              <GraduationCap className="w-8 h-8 text-purple-500 dark:text-pink-400 animate-bounce" />
              Education
            </h3>

            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 dark:hover:from-pink-700 dark:hover:to-purple-700 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${edu.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h4>
                <p className="text-purple-600 dark:text-pink-400 font-medium mb-2">{edu.institution}</p>
                {edu.status && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-700 dark:text-pink-300 rounded-full text-sm font-medium animate-pulse">
                    {edu.status}
                  </span>
                )}
                {edu.location && <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.location}</p>}
              </div>
            ))}

            {/* Certifications */}
            <div className="bg-gradient-to-r from-cyan-400 to-teal-400 dark:from-teal-700 dark:to-cyan-700 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h4>
              <p className="text-purple-600 dark:text-pink-400 font-medium mb-3">ORION International Campus</p>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse mt-2"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Professional Experience & Achievements */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3 animate-fade-in-right">
              <Briefcase className="w-8 h-8 text-cyan-600 dark:text-cyan-400 animate-bounce" />
              Professional Experience
            </h3>

            {/* Experience Card */}
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 dark:from-pink-700 dark:to-purple-700 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Professional Tailor</h4>
                  <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>2014 - Present (11+ Years)</span>
                  </div>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Over 11 years of professional experience in tailoring</li>
                    <li>Developed strong skills in discipline and precision</li>
                    <li>Excellence in customer handling and satisfaction</li>
                    <li>Mastered time management and deadline adherence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Projects */}
            <div className="bg-gradient-to-r from-teal-400 to-blue-400 dark:from-teal-700 dark:to-blue-700 rounded-2xl p-6 shadow-2xl hover:shadow-3xl transform hover:-translate-y-3 hover:scale-105 transition-all duration-500 animate-fade-in-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Academic Projects & Group Work</h4>
                  <ul className="space-y-2 mt-3 text-gray-700 dark:text-gray-300">
                    <li>Participated in multiple university-level software projects</li>
                    <li>Experience in effective teamwork and collaboration</li>
                    <li>Strong documentation and technical presentation skills</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3 mt-12 animate-fade-in-up">
              <Trophy className="w-8 h-8 text-teal-600 dark:text-teal-400 animate-bounce" />
              Achievements & Activities
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-r from-purple-400 to-pink-400 dark:from-pink-700 dark:to-purple-700 rounded-xl p-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <achievement.icon className="w-8 h-8 text-white mb-2 animate-pulse" />
                  <h5 className="font-bold text-white text-sm mb-1">{achievement.title}</h5>
                  {achievement.subtitle && <p className="text-white/80 text-xs">{achievement.subtitle}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Language Skills */}
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-2">Language Skills</h3>
              <p className="opacity-90">Multilingual communication abilities</p>
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              {[
                { name: 'Tamil', value: 100 },
                { name: 'Sinhala', value: 70 },
                { name: 'English', value: 70 }
              ].map((lang, idx) => (
                <div key={idx} className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl w-32 text-center">
                  <p className="text-white font-bold text-lg">{lang.name}</p>
                  <div className="w-full h-2 bg-white/30 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-white rounded-full animate-progress" style={{ width: `${lang.value}%` }}></div>
                  </div>
                  <p className="text-white/90 text-sm mt-1">{lang.value}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
