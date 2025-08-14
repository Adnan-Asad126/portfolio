import React from "react";
import profileImage from "../assets/images/profile.jpeg";

const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I'm Adnan Asad, a results-driven Full Stack Developer with 2.5+ years of experience specializing in Laravel, Django, and Python-based solutions. I have strong expertise in both Frontend and Backend development, with a passion for building scalable web applications and data-driven solutions.

            My technical arsenal includes Laravel with Livewire, Django, React.js, Python for Data Science and Machine Learning, API development and integration, and modern databases like MySQL. I've successfully built over 150+ web scrapers and multiple LMS & CRM systems.

            Currently working at YoshaySoft Tech (Sept 2024 - Present), where I design and implement scalable backend APIs, develop Python-based scrapers and data processing tools, and create comprehensive dashboards for client analytics and reporting.

            My previous experience at Codesinc (Oct 2022 - Aug 2024) involved developing Laravel & Django applications, API integrations for various client projects, and Shopify integrations with Laravel backends.

            I hold certificates in Python for Data Science and Data Visualization with Cognos Dashboard, and I'm fluent in multiple languages including Urdu, English, Punjabi, Saraiki, and Balochi.

            I'm a dedicated problem solver and lifelong learner, committed to delivering high-quality, user-focused solutions and contributing to the developer community with innovative tools and insights.

            Let's collaborate to build powerful, data-driven web applications that make a real impact!
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Adnan Asad - Full Stack Developer"
            className="w-72 h-72 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;