import React from 'react';
import { MapPin, Phone, Mail, CheckCircle, Building2, FileCheck, Target, TrendingUp, Shield, FileSpreadsheet, ArrowRight } from 'lucide-react';
import { ServiceCarousel } from './components/ServiceCarousel';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';

function App() {
  const services = [
    {
      title: "Eliminate discrepancies",
      description: "Coordinate between multiple disciplines to create seamless and cohesive plans.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Minimize risks",
      description: "Minimize chances of errors, omissions, and disputes that could delay or disrupt the project.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Improve bid accuracy",
      description: "Facilitate a more realistic and accurate tender process, leading to better pricing and cost estimates.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Reduce costs",
      description: "Ensure details are clear and free of ambiguities to eliminate overpricing.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Streamline conflict resolution",
      description: "Reduce time spent on disputes, ensuring smoother project execution and fewer surprises.",
      icon: <Building2 className="w-6 h-6" />
    },
    {
      title: "Bid analysis & surveying",
      description: "We provide bid analysis, normalization, takeoffs, and quantity surveying services.",
      icon: <FileSpreadsheet className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      {/*<Stats />*/}

      {/* About Section */}
      <section id="about" className="py-32 relative bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#2B4B8C] mb-8 tracking-tight">About Us</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Naddex Services Inc.</strong>, our mission is simple: to provide the highest quality-controlled <strong>"Drawings Set"</strong> before your project goes to tender.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We specialize in pre-tender review and coordination to ensure that all project drawings are accurate, complete, and aligned across all disciplines.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-[#244E8A] text-white px-6 py-3 rounded-full hover:bg-[#1a3366] transition-colors">
                Contact Us
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200"
                alt="Architecture planning"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl">
                <h3 className="text-3xl font-bold text-[#244E8A] mb-2">35+</h3>
                <p className="text-gray-600">Years Combined Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#2B4B8C] mb-4 tracking-tight">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive quality control and coordination services to ensure your project's success
            </p>
          </div>
          <ServiceCarousel services={services} />
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-32 bg-[#244E8A] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-8 tracking-tight">Our Expertise</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Global Experience</h3>
                    <p className="text-gray-200">Extensive experience in both international and local construction projects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Diverse Portfolio</h3>
                    <p className="text-gray-200">From high-rise buildings to commercial complexes and residential developments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Comprehensive Management</h3>
                    <p className="text-gray-200">Experience as contractors, project managers, and owner representatives</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5584052/pexels-photo-5584052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Construction expertise"
                className="rounded-lg shadow-2xl object-cover aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#2B4B8C] mb-4 tracking-tight">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our experienced professionals leading the way in construction quality control
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-heading font-bold text-[#2B4B8C] mb-2 text-center">Nadder Awad</h3>
              <p className="text-gray-600 text-center mb-4">Civil Engineer | PMP Certified</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-heading font-bold text-[#2B4B8C] mb-2 text-center">Mohammad Botma</h3>
              <p className="text-gray-600 text-center mb-4">Structural Engineer | PEO Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-[#2B4B8C] mb-8 tracking-tight">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to ensure your project's success? Contact us today for a consultation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#244E8A] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">Toronto, Ontario</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#244E8A] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 416 825 5443</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#244E8A] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <a href="mailto:nadder.awad@naddex.com" className="text-gray-600 hover:text-[#244E8A]">
                      nadder.awad@naddex.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#244E8A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#244E8A] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#244E8A] focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#244E8A] text-white px-6 py-3 rounded-lg hover:bg-[#1a3366] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Naddex Services Inc.</h3>
              <p className="text-gray-400">
                Quality Control & Coordination Services for Construction Projects
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#expertise" className="text-gray-400 hover:text-white transition-colors">Expertise</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Toronto, Ontario</li>
                <li className="text-gray-400">+1 416 825 5443</li>
                <li><a href="mailto:nadder.awad@naddex.com" className="text-gray-400 hover:text-white transition-colors">nadder.awad@naddex.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Naddex Services Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
