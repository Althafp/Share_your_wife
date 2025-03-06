import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      question: "What is share your wife?",
      answer: "share your wife is an innovative podcast platform designed to bridge technology insights with real-world applications, focusing on blockchain, web3, and emerging digital technologies."
    },
    {
      question: "Who can use share your wife?",
      answer: "Our podcast is perfect for tech enthusiasts, blockchain developers, startup founders, investors, and anyone passionate about understanding cutting-edge technological innovations."
    },
    {
      question: "How does share your wife match with companies?",
      answer: "We curate episodes that feature industry leaders, innovative startups, and thought pioneers, providing unique insights into how emerging technologies are transforming various sectors."
    },
    {
      question: "What benefits do I get from using share your wife?",
      answer: "Listeners gain exclusive insights, learn from industry experts, understand emerging technology trends, and stay ahead of the curve in the rapidly evolving digital landscape."
    },
    {
      question: "How do I get early access?",
      answer: "Subscribe to our newsletter, follow our social media channels, or become a premium member to get early access to exclusive episodes and behind-the-scenes content."
    }
  ];

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="container mx-auto px-12 py-16">
      <div className="bg-syw-yellow rounded-3xl overflow-hidden grid md:grid-cols-2">
        {/* Left Side - Description */}
        <div className="p-12 flex flex-col justify-center items-center text-center text-black">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            What if Section
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-6"
          >
            Visit our help center to get in touch. 
            We're super responsive.
          </motion.p>
        </div>

        {/* Right Side - Questions */}
        <div className=" p-12">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <motion.button
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center text-left 
                  bg-gray-100 hover:bg-gray-200 p-4 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform ${
                    activeQuestion === index ? 'rotate-180' : ''
                  }`} 
                />
              </motion.button>
              <AnimatePresence>
                {activeQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 rounded-b-lg">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 flex px-8 self-center items-center justify-center bg-syw-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
          >
            See more
          </motion.button>
        </div>
      </div>

      {/* New Question Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 max-w-3xl mx-auto"
      >
        <div className="relative bg-white rounded-2xl shadow-xl border-2 border-syw-yellow p-2">
          <textarea
            placeholder="Type your what if question..."
            className="w-full px-6 py-4 text-lg resize-none outline-none min-h-[100px] rounded-xl"
          />
          <div className="flex items-center justify-between p-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Your question might be featured in our next episode!
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-syw-yellow px-8 py-3 rounded-xl font-semibold 
              text-dark-gray hover:bg-syw-yellow-600 transition-all
              shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <span>Post Question</span>
              <svg 
                className="w-5 h-5 transform rotate-45" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                />
              </svg>
            </motion.button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-syw-yellow rounded-full" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-syw-yellow rounded-full" />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-4 border-syw-yellow rounded-full bg-white" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-4 border-syw-yellow rounded-full bg-white" />
        </div>

        {/* Character Count or Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4 text-gray-500 text-sm"
        >
          Share your thought-provoking questions Lorem ipsum dolor sit amet.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default FAQSection;