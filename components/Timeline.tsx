import React from 'react';
import SectionContainer from './SectionContainer';
import { EDUCATION, EXPERIENCES } from '../constants';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <SectionContainer id="experience" className="bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">教育与经历</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-100 rounded-lg text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">教育背景</h3>
            </div>
            
            <div className="relative pl-8 border-l-2 border-primary/20 space-y-12">
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-4 ring-blue-100">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </span>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full mb-3">
                    <Calendar className="w-3 h-3" />
                    {EDUCATION.duration}
                  </span>
                  <h4 className="text-xl font-bold text-dark mb-1">{EDUCATION.school}</h4>
                  <p className="text-gray-600 font-medium mb-4">{EDUCATION.major} | {EDUCATION.degree}</p>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">主修课程：</p>
                    <div className="flex flex-wrap gap-2">
                        {EDUCATION.courses.map((course, idx) => (
                            <span key={idx} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">{course}</span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">工作/实习经历</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-orange-200 space-y-12">
                {EXPERIENCES.map((exp, index) => (
                    <div key={index} className="relative">
                        <span className="absolute -left-[41px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-white ring-4 ring-orange-100">
                        <div className="h-3 w-3 rounded-full bg-orange-500" />
                        </span>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-3">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                        </span>
                        <h4 className="text-xl font-bold text-dark mb-1">{exp.role}</h4>
                        <p className="text-gray-600 font-medium mb-4">{exp.company}</p>
                        <ul className="space-y-2">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Timeline;