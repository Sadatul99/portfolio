import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-100" /> },
    { name: "JavaScript", icon: <TbBrandJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  ];

  return (
    <section
      id="skills"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      <div className="absolute top-1/4 right-[-10%] w-[40rem] h-[400px] bg-[#e99b63] opacity-30 -rotate-[30deg] blur-[200px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          My <span className="text-transparent bg-gradient-to-r from-[#e99b63] via-white to-[#e99b63] bg-clip-text bg-[length:200%_200%] animate-gradient-loop font-semibold ">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={25}
              tiltMaxAngleY={25}
              scale={1.07}
              transitionSpeed={250}
              className="rounded-xl"
            >
              <div className="bg-[#1a1a1a] rounded-xl p-6 hover:bg-[#252525] transition-all duration-300 group flex flex-col items-center text-center">
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
