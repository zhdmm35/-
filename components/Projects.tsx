import React from 'react';
import SectionContainer from './SectionContainer';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Cpu, Star } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects" className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">项目经验</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500">核心项目展示与技术攻坚</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <div className="absolute -right-10 -top-10 text-gray-50 opacity-50 group-hover:opacity-100 group-hover:text-blue-50 transition-colors duration-500 transform rotate-12">
                <Cpu size={200} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm font-semibold text-gray-500 mt-1 block">{project.role}</span>
                  </div>
                  {/* Link Icon (visual only since no real links provided) */}
                  <div className="p-2 bg-gray-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors cursor-pointer">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Achievements */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-dark flex items-center gap-2">
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    核心亮点
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;