import { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';

const ChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm SoftSell's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Sample FAQ responses
  const faqResponses = {
    'how do i sell my license': 
      `To sell your software license, follow these 3 easy steps:\n
      1. Complete our quick form with your license details
      2. Receive an instant valuation based on market rates
      3. Accept the offer and get paid within 48 hours
      
      Would you like to start the process now?`,
    
    'what types of licenses': 
      `We currently accept licenses from the following vendors:\n
      • Microsoft (Office, Windows, Visual Studio, etc.)
      • Adobe (Creative Cloud, Acrobat, etc.)
      • Autodesk (AutoCAD, Revit, etc.)
      • Oracle (Database, Middleware, etc.)
      • SAP
      • Salesforce
      • VMware
      • And many more!
      
      What type of license are you looking to sell?`,
    
    'how much is my license worth': 
      `License values depend on several factors including:\n
      • Software vendor and product
      • License type (perpetual, subscription)
      • Remaining subscription period
      • Number of seats/users
      • Current market demand
      
      For an accurate valuation, please fill out our form with your license details, and we'll provide an instant quote.`,
    
    'how long does it take': 
      `Our process is designed for speed and efficiency:\n
      • Valuation: Instant (via our automated system)
      • Verification: 1-24 hours (depending on license type)
      • Payment: Within 48 hours of verification
      
      Most transactions are completed within 2-3 business days from start to finish.`,
    
    'is this legal': 
      `Yes, software license resale is legal in most jurisdictions, subject to the specific terms of your license agreement. Our compliance team reviews each transaction to ensure it adheres to applicable laws and vendor terms.
      
      We only facilitate transfers that are permitted under the original license agreement.`,
      
    'payment methods': 
      `We offer multiple payment options for your convenience:\n
      • Direct bank transfer (ACH/wire)
      • PayPal
      • Check (US only)
      • Crypto (Bitcoin, Ethereum)
      
      All transactions are secured with bank-level encryption.`
  };

  // Example suggested questions
  const suggestedQuestions = [
    "How do I sell my license?",
    "What types of licenses do you accept?",
    "How much is my license worth?",
    "How long does the process take?",
    "Is this legal?",
    "What payment methods do you offer?"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with slight delay
    setTimeout(() => {
      const response = generateResponse(input.toLowerCase());
      const botMessage = {
        id: messages.length + 2,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (query) => {
    // Check if the user's message matches any FAQ keywords
    for (const [keyword, response] of Object.entries(faqResponses)) {
      if (query.includes(keyword)) {
        return response;
      }
    }

    // Default responses for unrecognized queries
    const defaultResponses = [
      "Thanks for your question! To provide the most accurate information, I'd recommend speaking with one of our license specialists. Would you like to schedule a call?",
      "That's a great question. For more detailed information, please fill out our contact form and our team will get back to you within 24 hours.",
      "I don't have all the details for that specific question. Could you provide more information about what type of software license you're interested in selling?"
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSuggestedQuestion = (question) => {
    setInput(question);
    handleSendMessage();
  };

  const formatTimestamp = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 flex flex-col max-h-[32rem] overflow-hidden">
      {/* Chat header */}
      <div className="bg-sky-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Bot className="h-6 w-6 mr-2" />
          <h3 className="font-medium">SoftSell Assistant</h3>
        </div>
        <button 
          onClick={onClose}
          className="text-white/80 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-sky-500 text-white rounded-br-none' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-none'
              }`}
            >
              <div className="whitespace-pre-line">{message.text}</div>
              <div 
                className={`text-xs mt-1 ${
                  message.sender === 'user' 
                    ? 'text-sky-100' 
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {formatTimestamp(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 px-4 py-2 rounded-lg rounded-bl-none">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-slate-400 dark:bg-slate-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Suggested questions */}
      {messages.length < 3 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.slice(0, 3).map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Input form */}
      <form onSubmit={handleSendMessage} className="border-t border-slate-200 dark:border-slate-700 p-3 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-slate-100 dark:bg-slate-700 border-none rounded-full px-4 py-2 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
        />
        <button 
          type="submit"
          className="ml-2 p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
          disabled={!input.trim()}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default ChatWidget;