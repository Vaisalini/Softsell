import { ArrowRight } from 'lucide-react';

const HeroSection = ({ scrollToContact }) => {
  return (
    <section className="bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Turn Unused Software <span className="text-sky-500">Into Cash</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
            SoftSell helps businesses sell their unused software licenses quickly and securely. Get the best value for your licenses with our transparent marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact} 
              className="btn-primary"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => window.open('#', '_blank')} 
              className="btn-secondary"
            >
              How It Works
            </button>
          </div>
          
          <div className="mt-10 flex items-center text-sm text-slate-500 dark:text-slate-400">
            <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Trusted by over 500+ companies</span>
          </div>
        </div>
        
        <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 md:p-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="h-6 bg-slate-100 dark:bg-slate-700 rounded flex-1 ml-2"></div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-sky-100 dark:bg-sky-900/30 rounded-lg p-4 flex items-start">
                  <div className="bg-sky-500 rounded-md p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <line x1="9" x2="15" y1="9" y2="9"></line>
                      <line x1="9" x2="15" y1="15" y2="15"></line>
                      <line x1="9" x2="10" y1="12" y2="12"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">Adobe Creative Cloud</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">2 Enterprise Licenses</p>
                    <div className="mt-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm px-2 py-1 rounded inline-block">
                      $1,240 Estimated Value
                    </div>
                  </div>
                </div>
                
                <div className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 flex items-start">
                  <div className="bg-indigo-500 rounded-md p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 7h-9"></path>
                      <path d="M14 17H5"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">Microsoft Office 365</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">5 Business Licenses</p>
                    <div className="mt-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm px-2 py-1 rounded inline-block">
                      $899 Estimated Value
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;