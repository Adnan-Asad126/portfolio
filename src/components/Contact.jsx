import React, { useState } from "react";
import { Send, Phone, MapPin, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    // Simulate form submission (replace with actual API call)
    try {
      setStatus("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <main className="pt-20 lg:pt-[0rem] bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-6">
                  <MessageSquare className="w-5 h-5 text-blue-400 animate-pulse" />
                  <span className="text-sm font-semibold text-blue-300 tracking-wider uppercase">
                    Let's Connect
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                    Get in Touch
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Ready to bring your ideas to life? Let's discuss your next project and create something amazing together!
                </p>
              </div>

              <div className="space-y-8">
                <div className="group flex items-center space-x-6 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Email</h3>
                    <a 
                      href="mailto:binasad126@gmail.com"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      binasad126@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-center space-x-6 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">WhatsApp</h3>
                    <a 
                      href="https://wa.me/923043983892"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                    >
                      +92 304-3983892
                    </a>
                  </div>
                </div>

                <div className="group flex items-center space-x-6 p-4 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">Location</h3>
                    <p className="text-gray-300">Rahim Yar Khan, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-300">
                  Available for freelance projects
                </span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              {/* Form background with glass effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-3xl backdrop-blur-xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur opacity-50"></div>
              
              <div className="relative backdrop-blur-xl bg-white/5 p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      Send me a message
                    </h3>
                    <p className="text-gray-400 mt-2">I'll respond within 24 hours</p>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className={`w-full px-6 py-4 rounded-xl bg-white/5 border ${
                          errors.name ? "border-red-500" : "border-gray-600/50"
                        } focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm placeholder-gray-400`}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className={`w-full px-6 py-4 rounded-xl bg-white/5 border ${
                          errors.email ? "border-red-500" : "border-gray-600/50"
                        } focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm placeholder-gray-400`}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Subject"
                        className={`w-full px-6 py-4 rounded-xl bg-white/5 border ${
                          errors.subject ? "border-red-500" : "border-gray-600/50"
                        } focus:border-blue-500 focus:outline-none transition-all duration-300 backdrop-blur-sm placeholder-gray-400`}
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="relative">
                      <textarea
                        placeholder="Tell me about your project..."
                        rows="5"
                        className={`w-full px-6 py-4 rounded-xl bg-white/5 border ${
                          errors.message ? "border-red-500" : "border-gray-600/50"
                        } focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm placeholder-gray-400`}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-2">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <span className="relative z-10">Send Message</span>
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    
                    {/* Button animation overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Status Message */}
                {status && (
                  <div className="mt-6 text-center">
                    <div
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
                        status.includes("success")
                          ? "bg-green-500/20 border border-green-500/50 text-green-400"
                          : "bg-red-500/20 border border-red-500/50 text-red-400"
                      } backdrop-blur-sm`}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        status.includes("success") ? "bg-green-400" : "bg-red-400"
                      } animate-pulse`}></div>
                      <p className="font-medium">{status}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}