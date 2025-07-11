import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is share your wife?",
      answer: "Share Your WIFE is a podcast series where we explore fascinating 'What If' scenarios—diving into alternative realities, thought-provoking questions, and life-changing possibilities."
    },
    {
      question: "Who started share your wife?",
      answer: "This podcast was launched by 99th Floor"
    },
    {
      question: "Why is it called 'Share Your WIFE'?",
      answer: "The name is a play on words! 'WIFE' stands for What If Experiences."
    },
    {
      question: "Can I share my own 'What If' experience?",
      answer: "Absolutely! We encourage our community to send in their 'What If' stories."
    },
    {
      question: "Where can I watch to 'Share Your WIFE'?",
      answer: "You can watch the podcast on YouTube."
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="background-gradient-to-br from-yellow-100 to-yellow-200 ">
      <div className="mt-12">
        <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-400 overflow-hidden grid md:grid-cols-2 shadow-2xl">
          
          {/* Left Side */}
          <div className="p-8 md:p-12 flex flex-col justify-center items-center text-center text-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full blur-xl"></div>
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-white rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white rounded-full blur-lg"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight italic transform -rotate-2 text-shadow-lg" style={{fontFamily: 'serif', textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
                FAQ
              </h2>
              <div className="w-32 h-1 bg-black opacity-30 mx-auto mb-6 transform rotate-1"></div>
              <p className="text-xl mb-6 leading-relaxed font-medium">
                Frequently Asked Questions
              </p>
              <p className="text-lg opacity-90 italic">
                Everything you need to know about our podcast
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-8 md:p-12 space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="group">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex justify-between items-center text-left bg-white bg-opacity-90 hover:bg-opacity-100 p-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  <span className="font-semibold text-gray-800 text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`transform transition-transform duration-300 text-yellow-600 flex-shrink-0 ${
                      activeQuestion === index ? 'rotate-180' : ''
                    }`} 
                    size={24}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeQuestion === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-5 bg-white bg-opacity-75 rounded-xl mx-1">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center pt-6">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white border-opacity-30 shadow-lg">
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;