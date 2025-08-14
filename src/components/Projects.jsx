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
      description:
        "A comprehensive e-commerce platform for custom signage solutions, built with Laravel backend and modern frontend technologies. Features include custom order management, dynamic pricing, and seamless payment integration.",
      tags: ["Laravel", "Shopify", "E-commerce", "Custom Orders"],
      links: {
        github: "https://github.com/adnanasad/quicksignage",
        demo: "https://quicksignage.com/",
      },
      image: "/assets/images/quicksignage.png", // Changed from src/assets/images/
      featured: true,
    },
    {
      title: "Talkless Super Admin Dashboard",
      description:
        "Advanced desktop application admin panel with sophisticated call and meeting management features. Built with React and modern UI components for seamless user experience and comprehensive system control.",
      tags: ["React", "Admin Dashboard", "Desktop App", "Real-time"],
      links: {
        github: "https://github.com/adnanasad/talkless-admin",
        demo: "https://talkless-superadmin.vercel.app/",
      },
      image: "/assets/images/talkless.png", // Changed from src/assets/images/
      featured: true,
    },
    {
      title: "ZNet Realty Platform",
      description:
        "A dynamic real estate application built with React and Laravel API, emphasizing performance and modularity for property management and listings.",
      tags: ["React", "Laravel API", "Real Estate"],
      links: {
        github: "https://github.com/username/znet-realty",
        demo: "https://znetrealty.com/",
      },
      image: "/assets/images/real-estate.png", // Changed from src/assets/images/
      featured: false,
    },
    {
      title: "Belaaz E-commerce Solution",
      description:
        "An API-centric web application focused on performance and scalability for modern e-commerce experiences.",
      tags: ["React", "API", "E-commerce"],
      links: {
        github: "https://github.com/username/belaaz",
        demo: "https://belaaz.com/",
      },
      image: "/assets/images/news.png", // Changed from src/assets/images/
      featured: false,
    },
    {
      title: "Full-Stack Web Application",
      description:
        "A modern web solution built with a focus on simplicity and user experience, featuring dynamic UI updates and robust backend integration.",
      tags: ["Bootstrap", "Laravel", "Full-Stack"],
      links: {
        github: "https://github.com/username/alabeera",
        demo: "alabeerainternationalinstitute.com",
      },
      image: "/assets/images/alabeera.png", // Changed from src/assets/images/
      featured: false,
    },
    {
      title: "Deus Forever Enterprise Solution",
      description:
        "A next-generation project leveraging the power of Next.js and server-side rendering for optimal performance and SEO.",
      tags: ["Next.js", "React", "SSR", "Enterprise"],
      links: {
        github: "https://github.com/username/deusforever",
        demo: "https://deusforever.net",
      },
      image: "/assets/images/deusforever.png", // Changed from src/assets/images/
      featured: false,
    },
    {
      title: "Quicksignage - Figma Design",
      description:
        "Complete UI/UX design and interactive prototype for the Quicksignage e-commerce platform.",
      tags: ["Figma", "UI/UX Design", "E-commerce Design", "Prototyping"],
      links: {
        figma: "https://www.figma.com/proto/f4qCpI2aAFolyVkbtAyUMF/QuickSignage?node-id=0-1&t=nkUYtJNTg3QbsGFX-1",
      },
      image: "/assets/images/quicksignage.png", // Changed from src/assets/images/
      featured: true,
    },
    {
      title: "Talkless - Figma Design",
      description:
        "UI/UX design and interactive prototype for Talkless desktop application.",
      tags: ["Figma", "UI/UX Design", "Desktop App Design", "Prototyping"],
      links: {
        figma: "https://www.figma.com/design/M7zfdRCjUmPbIK1TAzjNB0/Talkless-Desktop?node-id=0-1&p=f&t=2oU8ROpv0b9z1bqq-0",
      },
      image: "/assets/images/talkless.png", // Changed from src/assets/images/
      featured: true,
    },
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

          // Determine the correct link and label dynamically
          const link =
            project.links.figma || project.links.demo || project.links.github;
          const linkLabel = project.links.figma
            ? "View Figma"
            : project.links.demo
            ? "Live Demo"
            : "View Code";

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center group rounded-xl p-[3px] ${
                isFeatured
                  ? "bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500"
                  : "bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-emerald-500/50"
              } bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-xl hover:shadow-2xl`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "slideInUp 0.8s ease-out forwards",
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
                      onError={(e) => {
                        // Fallback to a placeholder or hide the image
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=";
                      }}
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
                            {isFeatured ? "Featured Project" : "Project"}
                          </div>
                          <CardTitle className="text-slate-100 text-2xl md:text-3xl font-bold leading-tight">
                            {project.title}
                          </CardTitle>
                        </div>
                        <div className="flex gap-4">
                          {project.links.github && !project.links.figma && (
                            <a
                              href={project.links.github}
                              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={22} />
                            </a>
                          )}
                          {link && (
                            <a
                              href={link}
                              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                              target="_blank"
                              rel="noopener noreferrer"
                              title={linkLabel}
                            >
                              <ExternalLink size={22} />
                            </a>
                          )}
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
                            {isFeatured ? "Featured Project" : "Project"}
                          </div>
                          <CardTitle className="text-slate-100 text-2xl md:text-3xl font-bold leading-tight">
                            {project.title}
                          </CardTitle>
                        </div>
                        <div className="flex gap-4">
                          {project.links.github && !project.links.figma && (
                            <a
                              href={project.links.github}
                              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={22} />
                            </a>
                          )}
                          {link && (
                            <a
                              href={link}
                              className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                              target="_blank"
                              rel="noopener noreferrer"
                              title={linkLabel}
                            >
                              <ExternalLink size={22} />
                            </a>
                          )}
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
                      onError={(e) => {
                        // Fallback to a placeholder or hide the image
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=";
                      }}
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
          0%,
          100% {
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