import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = ({ scrollToContact }) => {
  // State for staggered animations
  const [isVisible, setIsVisible] = useState(false);
  
  // Set visibility after component mounts for animations to trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.95 }
  };
  
  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };
  
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      }
    }
  };
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        {/* Text content with staggered animations */}
        <motion.div 
          className="lg:w-1/2 lg:pr-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            Turn Unused Software{" "}
            <motion.span 
              className="text-sky-500 inline-block"
              animate={{ 
                color: ["#0ea5e9", "#6366f1", "#0ea5e9"],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              Into Cash
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl"
            variants={itemVariants}
          >
            SoftSell helps businesses sell their unused software licenses quickly and securely. Get the best value for your licenses with our transparent marketplace.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.button 
              onClick={scrollToContact} 
              className="btn-primary flex items-center justify-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get a Quote
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop" 
                }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
            
            <motion.button 
              onClick={() => window.open('#', '_blank')} 
              className="btn-secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              How It Works
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex items-center text-sm text-slate-500 dark:text-slate-400"
            variants={itemVariants}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.svg 
              className="h-5 w-5 text-green-500 mr-2" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: [0, 360]
              }}
              transition={{ 
                delay: 1.4,
                duration: 0.5,
                type: "spring" 
              }}
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </motion.svg>
            <span>Trusted by over 500+ companies</span>
          </motion.div>
        </motion.div>
        
        {/* Card visualization with animations */}
        <motion.div 
          className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="relative"
            variants={floatVariants}
            animate="float"
          >
            <motion.div 
              className="bg-white dark:bg-slate-800 rounded-lg shadow-xl p-6 md:p-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                type: "spring", 
                damping: 20,
                delay: 0.4 
              }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <motion.div 
                  className="h-3 w-3 rounded-full bg-red-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                ></motion.div>
                <motion.div 
                  className="h-3 w-3 rounded-full bg-yellow-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                ></motion.div>
                <motion.div 
                  className="h-3 w-3 rounded-full bg-green-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.9 }}
                ></motion.div>
                <motion.div 
                  className="h-6 bg-slate-100 dark:bg-slate-700 rounded flex-1 ml-2"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                ></motion.div>
              </div>
              
              <motion.div 
                className="space-y-4"
                variants={cardContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div 
                  className="bg-sky-100 dark:bg-sky-900/30 rounded-lg p-4 flex items-start"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="bg-sky-500 rounded-md p-2 mr-4">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-white" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <line x1="9" x2="15" y1="9" y2="9"></line>
                      <line x1="9" x2="15" y1="15" y2="15"></line>
                      <line x1="9" x2="10" y1="12" y2="12"></line>
                    </motion.svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">Adobe Creative Cloud</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">2 Enterprise Licenses</p>
                    <motion.div 
                      className="mt-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm px-2 py-1 rounded inline-block"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0)",
                          "0 0 0 4px rgba(34, 197, 94, 0.3)",
                          "0 0 0 0 rgba(34, 197, 94, 0)"
                        ],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    >
                      $1,240 Estimated Value
                    </motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="bg-indigo-100 dark:bg-indigo-900/30 rounded-lg p-4 flex items-start"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="bg-indigo-500 rounded-md p-2 mr-4">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-white" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                    >
                      <path d="M20 7h-9"></path>
                      <path d="M14 17H5"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </motion.svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white">Microsoft Office 365</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">5 Business Licenses</p>
                    <motion.div 
                      className="mt-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm px-2 py-1 rounded inline-block"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(34, 197, 94, 0)",
                          "0 0 0 4px rgba(34, 197, 94, 0.3)",
                          "0 0 0 0 rgba(34, 197, 94, 0)"
                        ],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1.5
                      }}
                    >
                      $899 Estimated Value
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Background blobs with animations */}
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-sky-500 rounded-full opacity-20 blur-2xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            ></motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -right-8 w-40 h-40 bg-indigo-500 rounded-full opacity-20 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.25, 0.2]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;