import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const licenseTypes = [
    { value: '', label: 'Select License Type' },
    { value: 'microsoft', label: 'Microsoft' },
    { value: 'adobe', label: 'Adobe' },
    { value: 'autodesk', label: 'Autodesk' },
    { value: 'oracle', label: 'Oracle' },
    { value: 'sap', label: 'SAP' },
    { value: 'salesforce', label: 'Salesforce' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would send this data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container">
        <h2 className="section-heading text-slate-900 dark:text-white">Get a Free Valuation</h2>
        <p className="section-subheading">Fill out the form below to get an estimate for your unused software licenses</p>
        
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Thank You!</h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Your request has been submitted successfully. Our team will get back to you with a valuation within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-primary"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'}`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'}`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="company" className="form-label">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`form-input ${errors.company ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'}`}
                    placeholder="Acme Inc."
                  />
                  {errors.company && <p className="error-message">{errors.company}</p>}
                </div>
                
                <div>
                  <label htmlFor="licenseType" className="form-label">License Type</label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    className={`form-input ${errors.licenseType ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'}`}
                  >
                    {licenseTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                  {errors.licenseType && <p className="error-message">{errors.licenseType}</p>}
                </div>
              </div>
              
              <div className="mt-6">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input min-h-[120px] ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-slate-600'}`}
                  placeholder="Tell us about the licenses you want to sell (type, quantity, purchase date, etc.)"
                  rows="5"
                ></textarea>
                {errors.message && <p className="error-message">{errors.message}</p>}
              </div>
              
              <div className="mt-8">
                <button type="submit" className="btn-primary w-full">
                  Get Your Valuation
                </button>
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-4">
                  By submitting this form, you agree to our <a href="#" className="text-sky-600 hover:underline">Terms of Service</a> and <a href="#" className="text-sky-600 hover:underline">Privacy Policy</a>.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;