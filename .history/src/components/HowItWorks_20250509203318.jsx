import { Upload, DollarSign, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const steps = [
    {
      id: 1,
      title: "Upload Your Licenses",
      description: "Enter your software license details through our secure portal. We support all major vendors.",
      icon: <Upload className="h-8 w-8 text-sky-500" />,
      bgColor: "bg-sky-50 dark:bg-sky-900/20",
      borderColor: "border-sky-200 dark:border-sky-800"
    },
    {
      id: 2,
      title: "Get an Instant Valuation",
      description: "Our AI-driven market analysis provides a fair, competitive quote in seconds.",
      icon: <DollarSign className="h-8 w-8 text-indigo-500" />,
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      borderColor: "border-indigo-200 dark:border-indigo-800"
    },
    {
      id: 3,
      title: "Get Paid Quickly",
      description: "Accept the offer and receive payment within 48 hours via your preferred method.",
      icon: <CreditCard className="h-8 w-8 text-emerald-500" />,
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      borderColor: "border-emerald-200 dark:border-emerald-800"
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }),
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    hover: {
      scale: 1.15,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.6
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1 }
    },
    animate: {
      x: [0, 5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.section
      id="how-it-works"
      className="section bg-white dark:bg-slate-800"
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2
          className="section-heading text-slate-900 dark:text-white"
          variants={headingVariants}
        >
          How It Works
        </motion.h2>
        
        <motion.p
          className="section-subheading"
          variants={headingVariants}
        >
          Our streamlined process makes selling software licenses easy, fast, and profitable
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`card border-2 ${step.borderColor} ${step.bgColor} relative h-full overflow-hidden`}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="absolute -top-5 left-6 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md"
                variants={iconVariants}
                whileHover="hover"
              >
                {step.icon}
              </motion.div>
              
              <motion.div
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500 dark:text-slate-300"
                variants={numberVariants}
              >
                {step.id}
              </motion.div>
              
              <div className="mt-6">
                <motion.h3
                  className="text-xl font-semibold mb-3 text-slate-900 dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  {step.title}
                </motion.h3>
                
                <motion.p
                  className="text-slate-600 dark:text-slate-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  {step.description}
                </motion.p>
              </div>
              
              {/* Animated background effect */}
              <motion.div
                className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full opacity-5"
                style={{ 
                  background: `radial-gradient(circle, ${step.id === 1 ? '#0ea5e9' : step.id === 2 ? '#6366f1' : '#10b981'}, transparent)`
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.05, 0.08, 0.05],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                  variants={arrowVariants}
                  animate="animate"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400 dark:text-slate-600">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Trace line animation that connects all steps */}
        <div className="hidden md:block relative h-2 mt-8 mx-auto">
          <motion.div
            className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500"
            style={{ width: '100%' }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
          />
          
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className="absolute top-0 h-2 w-2 rounded-full bg-white dark:bg-slate-800 border-2 border-indigo-500"
              style={{ 
                left: `${(index / (steps.length - 1)) * 100}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 1 + index * 0.3, type: "spring" }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;