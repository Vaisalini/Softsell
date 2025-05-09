import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "SoftSell helped us recover over $25,000 from unused Adobe and Microsoft licenses after our company downsized. The process was incredibly easy and the payment was processed within 24 hours.",
      author: "Sarah Johnson",
      position: "IT Director",
      company: "TechVision Inc.",
      avatar: "/api/placeholder/100/100",
      stars: 5
    },
    {
      id: 2,
      content: "As a startup, every dollar counts. SoftSell allowed us to sell excess enterprise licenses we'd purchased during our initial growth phase, providing much-needed capital to reinvest in our core business.",
      author: "Michael Chen",
      position: "Operations Manager",
      company: "NexGen Solutions",
      avatar: "/api/placeholder/100/100",
      stars: 5
    }
  ];

  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
      ));
  };

  return (
    <section id="testimonials" className="section bg-white dark:bg-slate-800">
      <div className="container">
        <h2 className="section-heading text-slate-900 dark:text-white">What Our Customers Say</h2>
        <p className="section-subheading">Don't just take our word for it - hear from businesses that have successfully sold their software licenses</p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="card border border-slate-200 dark:border-slate-700"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.stars)}
              </div>
              
              <blockquote className="text-lg italic mb-6 text-slate-700 dark:text-slate-300">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Company logos placeholders */}
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;