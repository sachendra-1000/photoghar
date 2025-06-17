import React, { useState, useEffect } from 'react';
import { Flower2, MapPin, Clock, Phone, Mail, Menu, X, ExternalLink } from 'lucide-react';
import backgroundImage from './images/background image.jpg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import logo from './images/logo.png';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };



  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-full">
                <img style={{ width: "40px" }} src={logo} alt="" />
              </div>
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                PHOTO GHAR
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['HOME', 'ABOUT US', 'GALLERY', 'VISIT US', 'CONTACT US'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`font-medium transition-colors hover:text-amber-500 ${scrolled ? 'text-gray-700' : 'text-white'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-4 py-2 space-y-2">
              {['HOME', 'ABOUT US', 'GALLERY', 'VISIT US', 'CONTACT US'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backgroundImage} alt="Peaceful Garden"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              PHOTO GHAR
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
              A Place of PhotoGraphy and VideoGraphy.
            </p>
            <button
              onClick={() => scrollToSection('visit-us')}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              VISIT NOW
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                "About <span className="text-amber-600">Photo Ghar</span>"
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
              PHOTO GHAR is your ultimate destination for capturing life’s most meaningful moments with creativity, precision, and passion. Whether it’s a wedding, corporate event, product shoot, or
               personal portrait, we blend artistic vision with technical expertise to bring your story to life.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
               A haven of creativity and visual storytelling in the heart of Kathmandu, Photoghar invites you to experience the art of photography and videography in its purest form. Here, 
               every frame is a moment preserved, every shot a reflection of emotion, beauty, and timeless memories.
              </p>
              <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                READ MORE
              </button>
            </div>

            <div className="relative">
              <img
                src={image2}
                alt="Temple Garden"

              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image3}
                alt={`Gallery image`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Sacred Moments</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image4}
                alt={`Gallery image`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Sacred Moments</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image5}
                alt={`Gallery image`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Sacred Moments</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image6}
                alt={`Gallery image`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Sacred Moments</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image7}
                alt={`Gallery image`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Sacred Moments</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={image8}
                alt={`Gallery image`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Sacred Moments</p>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              View More Photos
            </button>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location & Contact */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Location & Contact</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-700">Photo Ghar, Narephath, Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-700">+977-XXXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-700">info@photoghar.com</p>
                  </div>
                </div>
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-amber-600 mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                Opening Hours
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Monday to Friday</span>
                  <span className="text-gray-700">6:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Saturday</span>
                  <span className="text-gray-700">6:00 AM - 8:00 PM (Extended hours)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-semibold text-gray-900">Sunday</span>
                  <span className="text-gray-700">6:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-900">Public Holidays</span>
                  <span className="text-gray-700">6:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Hours may vary during festivals and special occasions
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}

          <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
            <a href="https://www.google.com/maps/place/Aryan+Digital+Photo+Studio/@27.6715225,85.3493425,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19e0d71b072f:0xd94feaf39d75f079!8m2!3d27.6715178!4d85.3519228!16s%2Fg%2F11s56m9_4m?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D">
              <div className="bg-gray-100 h-64 rounded-xl flex items-center justify-center mapImageBackground">
                <div className="text-center text-gray-500 ">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />

                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p>Location: Narephath, Kathmandu</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>

          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
           We welcome photography enthusiasts, artists, and dreamers from all walks of life to explore the creative world of Photoghar. Whether you're looking to capture special moments, plan a professional shoot, or simply experience the art of visual storytelling, we're 
           here for you. For bookings, collaborations, or project inquiries, feel free to reach out to us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call Us</span>
            </button>
            <button className="bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-full">
                  <img style={{ width: "40px" }} src={logo} alt="" />
                </div>
                <span className="text-xl font-bold">Photo Ghar</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Photoghar is a sanctuary of peace and spirituality nestled in the heart of Kathmandu.
                 More than just a destination, it is a sacred space where serenity meets creativity.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Narephath, Kathmandu, Nepal</p>
                <p>Phone: +977-XXXXXXXXX</p>
                <p>Email: info@Photoghar.com</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Mon-Fri: 6:00 AM - 7:00 PM</p>
                <p>Saturday: 6:00 AM - 8:00 PM</p>
                <p>Sunday: 6:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 PHOTO GHAR. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;