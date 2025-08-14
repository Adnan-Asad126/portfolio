import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, Server, Brain, Zap, Settings, Sparkles } from "lucide-react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaLaravel,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaShopify
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiMysql,
  SiBootstrap,
  SiDjango,
  SiJquery,
  SiLivewire,
  SiSqlite,
  SiPostman,
  SiCanva,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiPlotly,
  SiTensorflow,
  SiScikitlearn
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2, BsGithub, BsStars } from "react-icons/bs";
import { MdAnimation, MdApi, MdDataUsage } from "react-icons/md";
import { FcStackOfPhotos, FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color, gradient, index }) => (
  <Card className="group relative overflow-hidden bg-gradient-to-br from-gray-900/90 via-gray-800/50 to-gray-900/90 border border-gray-700/50 hover:border-gray-600/70 backdrop-blur-sm hover:scale-[1.03] transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 transform-gpu">
    {/* Animated background gradient */}
    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
    
    {/* Shimmer effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
    
    {/* Floating particles */}
    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-60 transition-opacity duration-500">
      <BsStars className="w-4 h-4 text-blue-400 animate-pulse" />
    </div>
    
    <CardContent className="p-8 relative z-10">
      <div className="flex items-center gap-5 mb-8">
        <div className={`relative p-4 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 ${color} group-hover:scale-125 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
          <Icon className="w-8 h-8 relative z-10" />
          {/* Icon glow effect */}
          <div className={`absolute inset-0 rounded-2xl ${color} opacity-20 blur-xl scale-150 group-hover:opacity-40 transition-opacity duration-500`}></div>
        </div>
        <div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200 group-hover:from-blue-200 group-hover:via-purple-200 group-hover:to-pink-200 transition-all duration-500">
            {title}
          </h3>
          <div className={`h-1 w-0 group-hover:w-full ${gradient.split(' ')[1]} transition-all duration-700 mt-1 rounded-full`}></div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, skillIndex) => (
          <Badge
            key={skillIndex}
            variant="outline"
            className="group/badge relative bg-gradient-to-r from-gray-800/60 to-gray-700/40 hover:from-gray-700/80 hover:to-gray-600/60 text-gray-100 border-gray-600/50 hover:border-gray-500/70 flex items-center gap-3 py-3 px-4 transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm transform-gpu"
            style={{
              animationDelay: `${skillIndex * 50}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <span className="transform group-hover/badge:scale-125 group-hover/badge:rotate-12 transition-all duration-300 relative z-10">
              {skill.icon}
            </span>
            <span className="font-semibold tracking-wide">{skill.name}</span>
            
            {/* Badge glow effect */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Core Programming",
      color: "text-blue-400",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-600/20",
      skills: [
        { name: "JavaScript", icon: <FaJs className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "PHP", icon: <FaPhp className="w-4 h-4 text-[#777BB4]" /> },
        { name: "HTML5", icon: <FaHtml5 className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="w-4 h-4 text-[#1572B6]" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
      ],
    },
    {
      icon: Server,
      title: "Backend Frameworks",
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 via-green-500/20 to-teal-600/20",
      skills: [
        { name: "Laravel", icon: <FaLaravel className="w-4 h-4 text-[#FF2D20]" /> },
        { name: "Django", icon: <SiDjango className="w-4 h-4 text-[#092E20]" /> },
        { name: "Livewire", icon: <SiLivewire className="w-4 h-4 text-[#4E56A6]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      color: "text-purple-400",
      gradient: "from-purple-500/20 via-pink-500/20 to-purple-600/20",
      skills: [
        { name: "React.js", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        // { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "jQuery", icon: <SiJquery className="w-4 h-4 text-[#0769AD]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
    {
      icon: Brain,
      title: "Data Science & ML",
      color: "text-orange-400",
      gradient: "from-orange-500/20 via-red-500/20 to-pink-600/20",
      skills: [
        { name: "Data Mining", icon: <MdDataUsage className="w-4 h-4 text-[#FF6B6B]" /> },
        { name: "Web Scraping", icon: <BsGrid1X2 className="w-4 h-4 text-[#4ECDC4]" /> },
        { name: "Deep Learning", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#150458]" /> },
        { name: "NumPy", icon: <SiNumpy className="w-4 h-4 text-[#013243]" /> },
        { name: "Matplotlib", icon: <SiPlotly className="w-4 h-4 text-[#3F4F75]" /> },
        { name: "Seaborn", icon: <SiPlotly className="w-4 h-4 text-[#3F4F75]" /> },
      ],
    },
    {
      icon: Database,
      title: "Database Management",
      color: "text-red-400",
      gradient: "from-red-500/20 via-rose-500/20 to-red-600/20",
      skills: [
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "SQLite", icon: <SiSqlite className="w-4 h-4 text-[#003B57]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
      ],
    },
    {
      icon: Zap,
      title: "APIs & Integration",
      color: "text-yellow-400",
      gradient: "from-yellow-500/20 via-amber-500/20 to-orange-600/20",
      skills: [
        { name: "REST APIs", icon: <MdApi className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "API Development", icon: <BsGrid1X2 className="w-4 h-4 text-[#4ECDC4]" /> },
        { name: "Shopify APIs", icon: <FaShopify className="w-4 h-4 text-[#96BF48]" /> },
        { name: "Third-party APIs", icon: <FcWorkflow className="w-4 h-4" /> },
      ],
    },
    {
      icon: Settings,
      title: "Tools & Platforms",
      color: "text-cyan-400",
      gradient: "from-cyan-500/20 via-teal-500/20 to-blue-600/20",
      skills: [
        { name: "Git & GitHub", icon: <BsGithub className="w-4 h-4 text-white" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Postman", icon: <SiPostman className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "WordPress", icon: <FaWordpress className="w-4 h-4 text-[#21759B]" /> },
        { name: "Canva", icon: <SiCanva className="w-4 h-4 text-[#00C4CC]" /> },
        { name: "Jupyter", icon: <SiJupyter className="w-4 h-4 text-[#F37626]" /> },
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      ],
    },
    {
      icon: Sparkles,
      title: "Additional Skills",
      color: "text-pink-400",
      gradient: "from-pink-500/20 via-rose-500/20 to-purple-600/20",
      skills: [
        { name: "Agile & Scrum", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Documentation", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#4ECDC4]" /> },
        { name: "Testing", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        { name: "Data Visualization", icon: <SiPlotly className="w-4 h-4 text-[#3F4F75]" /> },
        { name: "Figma Design", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
      
      <section className="container mx-auto px-6 py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-blue-400 animate-spin" />
            <span className="text-sm font-semibold text-blue-300 tracking-wider uppercase">
              Full Stack Developer
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-gradient bg-300% relative">
              Technical Skills
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 rounded-lg blur opacity-20 animate-pulse"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Crafting digital experiences with modern technologies,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
              data science expertise
            </span>,{" "}
            and innovative solutions
          </p>
          
          {/* Animated line */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              <SkillCard
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
                gradient={category.gradient}
                index={index}
              />
            </div>
          ))}
        </div>
        
        {/* Achievement Badge */}
        <div className="flex justify-center">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-75 animate-pulse"></div>
            <div className="relative flex items-center gap-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-orange-500/50 rounded-full px-8 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <BsStars className="w-6 h-6 text-orange-400 animate-spin" />
                  <div className="absolute inset-0 bg-orange-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                </div>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                  150+ Web Scraping Projects Completed
                </span>
              </div>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping delay-200"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes slideInUp {
          0% { 
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          100% { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .bg-300\\% {
          background-size: 300% 300%;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;