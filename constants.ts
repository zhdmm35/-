import { Education, Experience, Project, Skill } from "./types";

export const PERSONAL_INFO = {
  name: "张汇",
  role: "Java 后端开发工程师",
  email: "huiyaozhang@gmail.com",
  phone: "15718191152",
  location: "广东惠州",
  github: "github.com/huiyao", // Placeholder based on common practices
  about: "21岁，本科计算机科学与技术专业。拥有扎实的Java基础与Spring全家桶开发经验。热衷于分布式架构与高并发解决方案，熟悉微服务生态。在校期间主导多个企业级项目开发，具备良好的代码规范与文档编写能力。追求技术深度，善于利用AI工具提升开发效率。",
};

export const EDUCATION: Education = {
  school: "湛江科技学院",
  degree: "本科",
  major: "计算机科学与技术",
  duration: "2022-09 ~ 2026-06",
  courses: ["计算机网络", "数据结构", "操作系统", "组成原理", "软件工程", "云计算", "离散数学", "设计模式"]
};

export const EXPERIENCES: Experience[] = [
  {
    company: "某科技公司 (实习)",
    role: "后端开发",
    duration: "2022-07 ~ 2023-09",
    description: [
      "负责公司现有项目的维护与开发，对接第三方平台（如快递100、微信小程序）实现业务闭环。",
      "参与新OA项目的功能模块开发，负责需求分析、数据库设计、技术选型及模块化开发。",
      "编写高质量接口文档（Yapi/Apifox），规范前后端交互流程。"
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Java / JVM", level: 90, category: "Backend" },
  { name: "Spring Boot / Cloud", level: 88, category: "Backend" },
  { name: "MySQL (索引/调优)", level: 85, category: "Database" },
  { name: "Redis (缓存/哨兵)", level: 85, category: "Database" },
  { name: "Docker / K8s", level: 80, category: "Tools" },
  { name: "Kafka", level: 75, category: "Middleware" },
  { name: "Elasticsearch (ELK)", level: 70, category: "Middleware" },
  { name: "Vue3 / JavaScript", level: 75, category: "Tools" },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "OA办公平台",
    role: "核心后端开发",
    description: "面向组织日常运作的高频应用系统，涵盖考勤管理、日志管理、任务发布及报表统计等功能。",
    techStack: ["SpringCloud Alibaba", "Vue3", "Jenkins", "Docker", "Redis"],
    achievements: [
      "重构考勤存储逻辑：将传统的数据库单条插入改为 Redis Bitmaps 存储 + RDB 落盘，性能提升 60%。",
      "微服务架构实践：深入理解服务解耦与快速迭代，优化资源利用率，实现高可用部署。",
      "负责考勤模块及相关业务流开发，定义标准化接口文档。"
    ]
  },
  {
    id: "p2",
    title: "图书馆管理系统 (AI赋能)",
    role: "全栈负责人",
    description: "集图书管理、借阅、权限控制于一体的综合系统，集成阿里百炼大模型实现智能推荐。",
    techStack: ["Spring Boot", "MyBatis-Plus", "Redis", "Aliyun OSS", "AI LLM"],
    achievements: [
      "AI 智能推荐：对接阿里百炼 API，基于用户偏好分析，推荐准确率提升 45%。",
      "OSS 集成：迁移本地存储至阿里云 OSS，配合 CDN 加速，文件传输速度提升 80%。",
      "性能优化：利用 Redis 缓存热点数据，数据库查询压力降低 70%；十万级数据查询毫秒级响应。",
      "创新功能：设计学生自主上传 + 班主任审核流程，丰富馆藏来源。"
    ]
  },
  {
    id: "p3",
    title: "AI 志愿填报顾问系统",
    role: "后端 & AI 模块开发",
    description: "依托大模型为高考考生提供智能咨询、院校查询、分数匹配及志愿指导服务。",
    techStack: ["Spring Boot", "LangChain4j", "Vector DB", "Vue3", "Docker"],
    achievements: [
      "RAG 应用开发：基于 LangChain4j 实现文档向量化存储与检索，构建垂直领域知识库。",
      "负责 AI 对话模块开发，实现智能问答与一对一预约服务落地。",
      "容器化部署：通过 Docker 部署 Redis 及向量数据库，保障服务快速迭代与稳定运行。"
    ]
  },
  {
    id: "p4",
    title: "帝可得智能售货机系统",
    role: "核心模块开发",
    description: "基于 RuoYi 框架定制的企业级物联网零售平台，聚焦 B 端运营与运维效率提升。",
    techStack: ["RuoYi", "Spring Boot", "IoT", "MySQL", "Redis", "Druid"],
    achievements: [
      "算法设计：独立开发设备自动货道生成算法，根据设备型号动态创建货道，提升配置效率。",
      "数据库优化：设计高效索引与关联模型，优化多表查询性能。",
      "框架定制：深度定制 RuoYi 框架适配业务场景，封装通用模块降低后续开发成本。"
    ]
  }
];
