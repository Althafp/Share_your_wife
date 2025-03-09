import { SetStateAction, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase configuration
// Replace these values with your own Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBjdPZKPStgPknpCW52vBZ7Bhp0yk2KKjc",
  authDomain: "maa44-2b8b8.firebaseapp.com",
  databaseURL: "https://maa44-2b8b8-default-rtdb.firebaseio.com",
  projectId: "maa44-2b8b8",
  storageBucket: "maa44-2b8b8.firebasestorage.app",
  messagingSenderId: "121725419219",
  appId: "1:121725419219:web:5ae214963a1f3945025e26",
  measurementId: "G-FG04W38HJ0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FAQSection = () => {
  //const [activeQuestion, setActiveQuestion] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const faqData = [
    {
      question: "What is share your wife?",
      answer: "Share Your WIFE is a podcast series where we explore fascinating 'What If' scenarios—diving into alternative realities, thought-provoking questions, and life-changing possibilities. It’s a space to share stories, ideas, and experiences that challenge the norm and spark imagination."
    },
    {
      question: "Who started share your wife?",
      answer: "This podcast was launched by 99th Floor"
    },
    {
      question: "Why is it called 'Share Your WIFE'?",
      answer: "The name is a play on words! 'WIFE' stands for What If Experiences—encouraging people to share their unique thoughts and stories about ‘What If’ moments in life."
    },
    {
      question: " Can I share my own ‘What If’ experience?",
      answer: " Absolutely! We encourage our community to send in their ‘What If’ stories, and some of them might even be featured in our episodes. Stay tuned for ways to participate!"
    },
    {
      question: "Where can I watch to 'Share Your WIFE'?",
      answer: "You can watch the podcast in Youtube."
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const handleQuestionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setNewQuestion(e.target.value);
    setSubmitMessage(''); // Clear any previous messages
  };

  const submitQuestion = async () => {
    // Validate input
    if (!newQuestion.trim()) {
      setSubmitMessage('Please enter a question');
      return;
    }

    try {
      setIsSubmitting(true);
      
      // Add a new document to 'questions' collection
      await addDoc(collection(db, "questions"), {
        question: newQuestion,
        createdAt: serverTimestamp(),
        status: 'pending' // You can use this to track which questions you've reviewed
      });
      
      // Reset form and show success message
      setNewQuestion('');
      setSubmitMessage('Your question has been submitted successfully!');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            value={newQuestion}
            onChange={handleQuestionChange}
          />
          <div className="flex items-center justify-between p-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Your question might be featured in our next episode!
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={submitQuestion}
              disabled={isSubmitting}
              className={`bg-syw-yellow px-8 py-3 rounded-xl font-semibold 
              text-dark-gray transition-all shadow-lg hover:shadow-xl 
              flex items-center space-x-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-syw-yellow-600'}`}
            >
              <span>{isSubmitting ? 'Posting...' : 'Post Question'}</span>
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

        {/* Submission Message */}
        {submitMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center mt-4 text-sm ${
              submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {submitMessage}
          </motion.p>
        )}

        {/* Helper Text */}
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