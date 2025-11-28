import React from 'react';
import SectionContainer from './SectionContainer';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <SectionContainer id="skills" className="bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">专业技能</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-500">我的技术栈与熟练度概览</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILLS.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-semibold text-lg text-dark">{skill.name}</span>
                <span className="text-sm font-medium text-primary">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-400 to-primary rounded-full relative"
                >
                    <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-white/30"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['分布式事务', 'Seata', 'Nacos', 'Sentinel', 'MyBatis-Plus', 'Linux', 'Git', 'Maven', 'RESTful API', 'JWT', 'Swagger'].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-secondary text-gray-600 rounded-lg text-sm hover:bg-primary hover:text-white transition-colors duration-300 cursor-default">
                    {tag}
                </span>
            ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;