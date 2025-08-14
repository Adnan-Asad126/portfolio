import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "Quicksignage E-commerce Platform",
      description: "A comprehensive e-commerce platform for custom signage solutions, built with Laravel backend and modern frontend technologies. Features include custom order management, dynamic pricing, and seamless payment integration.",
      tags: ["Laravel", "Shopify", "E-commerce", "Custom Orders"],
      links: {
        github: "https://github.com/adnanasad/quicksignage",
        demo: "https://quicksignage.com/",
      },
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true,
    },
    {
      title: "Talkless Super Admin Dashboard",
      description: "Advanced desktop application admin panel with sophisticated call and meeting management features. Built with React and modern UI components for seamless user experience and comprehensive system control.",
      tags: ["React", "Admin Dashboard", "Desktop App", "Real-time"],
      links: {
        github: "https://github.com/adnanasad/talkless-admin",
        demo: "https://talkless-superadmin.vercel.app/",
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true,
    },
    {
      title: "ZNet Realty Platform",
      description: "A dynamic real estate application built with React and Laravel API, emphasizing performance and modularity for property management and listings.",
      tags: ["React", "Laravel API", "Real Estate"],
      links: {
        github: "https://github.com/username/znet-realty",
        demo: "https://znetrealty.com/",
      },
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Belaaz E-commerce Solution",
      description: "An API-centric web application focused on performance and scalability for modern e-commerce experiences.",
      tags: ["React", "API", "E-commerce"],
      links: {
        github: "https://github.com/username/belaaz",
        demo: "https://belaaz.com/",
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Seseo Digital Agency",
      description: "A modern digital agency website built with clean HTML5, CSS3, and Bootstrap, showcasing innovative design patterns and responsive architecture.",
      tags: ["HTML5", "CSS3", "Bootstrap", "Responsive"],
      links: {
        github: "https://github.com/username/seseo",
        demo: "https://www.seseo.dk/",
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Full-Stack Web Application",
      description: "A modern web solution built with a focus on simplicity and user experience, featuring dynamic UI updates and robust backend integration.",
      tags: ["React", "Node.js", "Full-Stack"],
      links: {
        github: "https://github.com/username/fullstack-app",
        demo: "https://demo-app.com",
      },
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Next.js Enterprise Solution",
      description: "A next-generation project leveraging the power of Next.js and server-side rendering for optimal performance and SEO.",
      tags: ["Next.js", "React", "SSR", "Enterprise"],
      links: {
        github: "https://github.com/username/nextjs-enterprise",
        demo: "https://nextjs-demo.com",
      },
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Creative Portfolio Platform",
      description: "A creative project built to demonstrate innovative design patterns and clean architecture using modern React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Portfolio", "Creative"],
      links: {
        github: "https://github.com/username/creative-portfolio",
        demo: "https://creative-demo.com",
      },
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Laravel API Backend",
      description: "A TypeScript-powered project delivering enhanced reliability and maintainability with comprehensive API documentation and testing.",
      tags: ["Laravel", "API", "TypeScript", "Backend"],
      links: {
        github: "https://github.com/username/laravel-api",
        demo: "https://api-demo.com",
      },
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Responsive Business Website",
      description: "A full-stack project combining modern web technologies for a seamless business experience with optimized performance.",
      tags: ["HTML5", "CSS3", "Bootstrap", "Business"],
      links: {
        github: "https://github.com/username/business-site",
        demo: "https://business-demo.com",
      },
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Modern UI/UX Showcase",
      description: "A creative venture showcasing modern UI/UX design principles with React and Bootstrap, featuring interactive components and smooth animations.",
      tags: ["React", "Bootstrap", "UI/UX", "Design"],
      links: {
        github: "https://github.com/username/ui-showcase",
        demo: "https://ui-demo.com",
      },
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    },
    {
      title: "Enterprise Web Solution",
      description: "A comprehensive enterprise solution showcasing modern development practices with React and .NET integration for scalable business applications.",
      tags: ["React", ".NET", "Enterprise", "Scalable"],
      links: {
        github: "https://github.com/username/enterprise-solution",
        demo: "https://enterprise-demo.com",
      },
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false,
    }
  ];

  return (
    <div className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-3 mb-8">
            <ExternalLink className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-300 tracking-wider uppercase">
              Featured Projects
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-400">
              Project Showcase
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore a collection of full-stack applications, e-commerce platforms, and innovative solutions
          </p>
        </div>

        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          const isFeatured = project.featured;
          
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center group rounded-xl p-[3px] ${
                isFeatured 
                  ? 'bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500' 
                  : 'bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-emerald-500/50'
              } bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-xl hover:shadow-2xl`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideInUp 0.8s ease-out forwards'
              }}
            >
              {isEven ? (
                <>
                  {/* Image Section */}
                  <div className="md:w-1/2 overflow-hidden rounded-xl relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {isFeatured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>

                  {/* Text Section */}
                  <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
                    <MacOsButtons />
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                            {isFeatured ? 'Featured Project' : 'Project'}
                          </div>
                          <CardTitle className="text-slate-100 text-2xl md:text-3xl font-bold leading-tight">
                            {project.title}
                          </CardTitle>
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.links.github}
                            className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={22} />
                          </a>
                          <a
                            href={project.links.demo}
                            className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={22} />
                          </a>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-4">
                      <p className="text-slate-300 mb-6 text-base md:text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <>
                  {/* Text Section */}
                  <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-xl overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
                    <MacOsButtons />
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                            {isFeatured ? 'Featured Project' : 'Project'}
                          </div>
                          <CardTitle className="text-slate-100 text-2xl md:text-3xl font-bold leading-tight">
                            {project.title}
                          </CardTitle>
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.links.github}
                            className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={22} />
                          </a>
                          <a
                            href={project.links.demo}
                            className="text-slate-demo.hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={22} />
                          </a>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="mt-4">
                      <p className="text-slate-300 mb-6 text-base md:text-lg leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Image Section */}
                  <div className="md:w-1/2 overflow-hidden rounded-xl relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {isFeatured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
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
        
        @keyframes gradient-xy {
          0%, 100% {
            transform: translate(0%, 0%);
          }
          25% {
            transform: translate(100%, 0%);
          }
          50% {
            transform: translate(100%, 100%);
          }
          75% {
            transform: translate(0%, 100%);
          }
        }
        
        .animate-gradient-xy {
          animation: gradient-xy 6s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;