import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // Initialize dark mode based on user preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Update document class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Smooth scroll to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-800 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <svg className="h-8 w-8 text-sky-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <line x1="9" x2="15" y1="9" y2="9"></line>
                  <line x1="9" x2="15" y1="15" y2="15"></line>
                  <line x1="9" x2="10" y1="12" y2="12"></line>
                </svg>
                <span className="ml-2 text-xl font-bold text-slate-800 dark:text-white">SoftSell</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                How It Works
              </button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400">
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-600"
              >
                Get Started
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-md text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-800 shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-sky-400 dark:hover:bg-slate-700 w-full text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('why-choose-us')}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-sky-400 dark:hover:bg-slate-700 w-full text-left"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-sky-500 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-sky-400 dark:hover:bg-slate-700 w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-sky-500 text-white hover:bg-sky-600"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <HeroSection scrollToContact={() => scrollToSection('contact')} />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-4 shadow-lg"
        >
          {showChat ? <X size={24} /> : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          )}
        </button>
        {showChat && <ChatWidget onClose={() => setShowChat(false)} />}
      </div>
    </div>
  );
}

export default App;