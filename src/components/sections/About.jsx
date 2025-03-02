import { RevealOnScroll } from "../RevealOnScroll";
import data from "../../../data.json";

function About() {
  return (
    <section id='about' className='min-h-screen flex items-center justify-center py-20'>
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            About Me
          </h2>
          <div className='rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
              {data.about.title}
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                <div className='flex flex-wrap gap-2'>
                  {data.about.backenbSkills.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition '>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
                  {data.about.frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                  hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition '>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>🏫 Education</h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
              {data.about.education.map((edu, key) => (
                <li key={key}>
                  <strong>{edu.name}</strong> - {edu.description}
                </li>
              ))}
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>💼 Work Experience</h3>
              <div className='space-y-4 text-gray-300'>
                {data.about.workExperience.map((work, index) => (
                  <div key={index}>
                  <h4 className='font-semibold'>{work}</h4>
                  {/* <p>
                  Skilled in building scalable APIs, managing databases (MongoDB, MySQL, Firebase), and implementing secure authentication (JWT, OAuth). I also optimize performance, handle real-time features, and deploy applications on AWS and Firebase
                </p> */}
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About