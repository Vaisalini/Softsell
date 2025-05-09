import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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

  // Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 text-yellow-400 fill-yellow-400 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        />
      ));
  };

  return (
    <section id="testimonials" className="section py-16 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 
          className={`text-3xl font-bold text-center mb-4 text-slate-900 dark:text-white transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          What Our Customers Say
        </h2>
        <p 
          className={`text-lg text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          Don't just take our word for it - hear from businesses that have successfully sold their software licenses
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-500"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: `${index * 200 + 600}ms`,
              }}
              onMouseEnter={() => setHoveredCard(testimonial.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex mb-4">
                {renderStars(testimonial.stars)}
              </div>
              
              <blockquote 
                className="text-lg italic mb-6 text-slate-700 dark:text-slate-300 relative"
                style={{
                  transform: hoveredCard === testimonial.id ? 'scale(1.02)' : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <span className="text-4xl absolute -top-4 -left-2 text-slate-300 dark:text-slate-600 opacity-50">"</span>
                {testimonial.content}
                <span className="text-4xl absolute -bottom-8 -right-2 text-slate-300 dark:text-slate-600 opacity-50">"</span>
              </blockquote>
              
              <div className="flex items-center">
                <div 
                  className="relative overflow-hidden rounded-full mr-4"
                  style={{
                    transform: hoveredCard === testimonial.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full"
                  />
                  {hoveredCard === testimonial.id && (
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-20 rounded-full animate-pulse"></div>
                  )}
                </div>
                <div>
                  <div 
                    className="font-semibold text-slate-900 dark:text-white transition-all duration-300"
                    style={{
                      transform: hoveredCard === testimonial.id ? 'translateX(3px)' : 'translateX(0)',
                    }}
                  >
                    {testimonial.author}
                  </div>
                  <div 
                    className="text-sm text-slate-500 dark:text-slate-400 transition-all duration-300"
                    style={{
                      transform: hoveredCard === testimonial.id ? 'translateX(3px)' : 'translateX(0)',
                      transitionDelay: '50ms'
                    }}
                  >
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p 
            className={`text-lg font-medium text-slate-700 dark:text-slate-300 mb-8 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          >
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Company logos with animations */}
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div 
                key={i}
                className="h-8 w-32 bg-slate-200 dark:bg-slate-700 rounded"
                style={{
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 0.7 : 0,
                  transition: 'all 0.5s ease',
                  transitionDelay: `${i * 100 + 1200}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;