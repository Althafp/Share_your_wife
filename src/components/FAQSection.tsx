import React, { useState } from 'react';
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
    </div>
  );
};

export default FAQSection;