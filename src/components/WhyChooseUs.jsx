import { ShieldCheck, Zap, BarChart, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const features = [
    {
      id: 1,
      title: "Secure Transactions",
      description: "Bank-level encryption and secure payment processing ensure your sensitive license data is always protected.",
      icon: <ShieldCheck className="h-10 w-10 text-sky-500" />,
      bgGradient: "from-sky-400 to-sky-600",
      delay: 0
    },
    {
      id: 2,
      title: "Lightning Fast Process",
      description: "Our streamlined system provides valuations in seconds and completes most transactions within 48 hours.",
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      bgGradient: "from-yellow-400 to-amber-600",
      delay: 0.1
    },
    {
      id: 3,
      title: "Market-Leading Rates",
      description: "Our extensive network of buyers allows us to offer you up to 70% of the original license value.",
      icon: <BarChart className="h-10 w-10 text-emerald-500" />,
      bgGradient: "from-emerald-400 to-emerald-600",
      delay: 0.2
    },
    {
      id: 4,
      title: "Compliance Guaranteed",
      description: "Our legal team ensures all transfers comply with vendor terms and conditions and applicable regulations.",
      icon: <Award className="h-10 w-10 text-indigo-500" />,
      bgGradient: "from-indigo-400 to-indigo-600",
      delay: 0.3
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    hidden: { 
      opacity: 0,
      y: 40
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      y: -15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconContainerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0,
      rotate: -10
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 8
      }
    }
  };

  const iconVariants = {
    initial: {},
    animate: (feature) => {
      // Custom animation for each icon
      if (feature.id === 1) { // ShieldCheck
        return {
          rotateY: [0, 180, 0],
          transition: { 
            duration: 2.5, 
            repeat: Infinity,
            repeatDelay: 3 
          }
        };
      } else if (feature.id === 2) { // Zap
        return {
          scale: [1, 1.2, 1],
          transition: { 
            duration: 0.5, 
            repeat: Infinity,
            repeatDelay: 2.5 
          }
        };
      } else if (feature.id === 3) { // BarChart
        return {
          y: [0, -5, 0],
          transition: { 
            duration: 1, 
            repeat: Infinity,
            repeatDelay: 2 
          }
        };
      } else { // Award
        return {
          rotate: [0, 10, -10, 0],
          transition: { 
            duration: 1.5, 
            repeat: Infinity,
            repeatDelay: 3 
          }
        };
      }
    }
  };

  return (
    <motion.section
      id="why-choose-us"
      className="section bg-slate-50 dark:bg-slate-900"
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
          Why Choose SoftSell
        </motion.h2>
        
        <motion.p
          className="section-subheading"
          variants={headingVariants}
        >
          We've helped thousands of businesses recover value from their unused software assets
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="card flex flex-col items-center text-center h-full relative overflow-hidden group"
              custom={feature.delay}
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
            >
              {/* Animated background gradient blob */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-5 rounded-lg`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 + feature.delay }}
              />
              
              {/* Animated icon container */}
              <motion.div
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 mb-6 relative z-10"
                custom={feature.delay}
                variants={iconContainerVariants}
                whileHover="hover"
              >
                {/* Shadow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(0,0,0,0)",
                      "0 0 0 10px rgba(0,0,0,0.03)",
                      "0 0 0 0 rgba(0,0,0,0)"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatDelay: 2,
                    duration: 1.5
                  }}
                />
                
                {/* Animated icon */}
                <motion.div
                  custom={feature}
                  variants={iconVariants}
                  animate="animate"
                >
                  {feature.icon}
                </motion.div>
              </motion.div>
              
              <motion.h3
                className="text-xl font-semibold mb-3 text-slate-900 dark:text-white relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + feature.delay }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p
                className="text-slate-600 dark:text-slate-300 relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 + feature.delay }}
              >
                {feature.description}
              </motion.p>
              
              {/* Border effect on hover */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100"
                style={{ 
                  backgroundImage: `linear-gradient(to right, transparent, 
                  ${feature.id === 1 ? '#0ea5e9' : 
                   feature.id === 2 ? '#eab308' : 
                   feature.id === 3 ? '#10b981' : 
                   '#6366f1'}, transparent)`
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Background floating dots */}
        <div className="relative mt-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-slate-200 dark:bg-slate-700"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.4
              }}
              animate={{
                y: [0, Math.random() * -30 - 10, 0],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        
        {/* Stats counter ribbon */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-lg p-8 text-white shadow-lg text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterStat value={12500} label="Licenses Sold" />
            <CounterStat value={98} label="% Satisfaction Rate" suffix="%" />
            <CounterStat value={24} label="Hour Support" />
            <CounterStat value={5} label="Minute Setup" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Animated counter component
const CounterStat = ({ value, label, suffix = "" }) => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  
  return (
    <div className="flex flex-col items-center" ref={counterRef}>
      <motion.div 
        className="text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { 
            opacity: 1,
            transition: { duration: 0.5 }
          } : { opacity: 0 }}
        >
          {isInView ? (
            <Counter from={0} to={value} duration={2} />
          ) : '0'}
        </motion.span>
        {suffix}
      </motion.div>
      <motion.div 
        className="text-sm md:text-base opacity-90"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.9 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {label}
      </motion.div>
    </div>
  );
};

// Counter animation hook component
const Counter = ({ from, to, duration }) => {
  const nodeRef = useRef(null);
  
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        node.textContent = Math.round(value).toLocaleString();
      },
      ease: "easeOut"
    });
    
    return () => controls.stop();
  }, [from, to, duration]);
  
  return <span ref={nodeRef}>{from}</span>;
};

// Import this to make the Counter work
import { animate } from 'framer-motion';
import { useEffect } from 'react';

export default WhyChooseUs;