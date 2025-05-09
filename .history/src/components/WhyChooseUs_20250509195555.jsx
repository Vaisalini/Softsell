import { ShieldCheck, Zap, BarChart, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Secure Transactions",
      description: "Bank-level encryption and secure payment processing ensure your sensitive license data is always protected.",
      icon: <ShieldCheck className="h-10 w-10 text-sky-500" />,
    },
    {
      id: 2,
      title: "Lightning Fast Process",
      description: "Our streamlined system provides valuations in seconds and completes most transactions within 48 hours.",
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
    },
    {
      id: 3,
      title: "Market-Leading Rates",
      description: "Our extensive network of buyers allows us to offer you up to 70% of the original license value.",
      icon: <BarChart className="h-10 w-10 text-emerald-500" />,
    },
    {
      id: 4,
      title: "Compliance Guaranteed",
      description: "Our legal team ensures all transfers comply with vendor terms and conditions and applicable regulations.",
      icon: <Award className="h-10 w-10 text-indigo-500" />,
    }
  ];

  return (
    <section id="why-choose-us" className="section bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <h2 className="section-heading text-slate-900 dark:text-white">Why Choose SoftSell</h2>
        <p className="section-subheading">We've helped thousands of businesses recover value from their unused software assets</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature) => (
            <div key={feature.id} className="card flex flex-col items-center text-center h-full transition-transform hover:scale-105">
              <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;