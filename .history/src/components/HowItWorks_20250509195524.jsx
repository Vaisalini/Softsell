import { Upload, DollarSign, CreditCard } from 'lucide-react';

const HowItWorks = () => {
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

  return (
    <section id="how-it-works" className="section bg-white dark:bg-slate-800">
      <div className="container">
        <h2 className="section-heading text-slate-900 dark:text-white">How It Works</h2>
        <p className="section-subheading">Our streamlined process makes selling software licenses easy, fast, and profitable</p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`card border-2 ${step.borderColor} ${step.bgColor} relative h-full`}
            >
              <div className="absolute -top-5 left-6 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md">
                {step.icon}
              </div>
              <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500 dark:text-slate-300">
                {step.id}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400 dark:text-slate-600">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;