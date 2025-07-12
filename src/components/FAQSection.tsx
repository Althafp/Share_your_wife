import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, limit, getDocs } from 'firebase/firestore';

// Firebase configuration
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

interface FAQ {
  id: string;
  question: string;
  createdAt: any;
}

interface Comment {
  id: string;
  text: string;
  createdAt: any;
}

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState('');
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedFAQId, setSelectedFAQId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Fetch questions from Firebase
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const q = showAll
          ? query(collection(db, 'questions'), orderBy('createdAt', 'desc'))
          : query(collection(db, 'questions'), orderBy('createdAt', 'desc'), limit(5));
        const querySnapshot = await getDocs(q);
        const faqList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as FAQ[];
        setFaqs(faqList);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
    
    fetchFAQs();
  }, [showAll]);

  // Fetch comments for selected FAQ
  const fetchComments = async (faqId: string) => {
    try {
      const commentsRef = collection(db, `questions/${faqId}/comments`);
      const q = query(commentsRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const commentList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Comment[];
      setComments(commentList);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const toggleQuestion = (index: number, faqId: string) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
      setSelectedFAQId(null);
      setComments([]);
    } else {
      setActiveQuestion(index);
      setSelectedFAQId(faqId);
      fetchComments(faqId);
    }
  };

  const handleQuestionChange = (e: { target: { value: string } }) => {
    setNewQuestion(e.target.value);
    setSubmitMessage('');
  };

  const handleCommentChange = (e: { target: { value: string } }) => {
    setNewComment(e.target.value);
  };

  const submitQuestion = async () => {
    if (!newQuestion.trim()) {
      setSubmitMessage('Please enter a question');
      return;
    }

    try {
      setIsSubmitting(true);
      await addDoc(collection(db, 'questions'), {
        question: newQuestion,
        createdAt: serverTimestamp(),
        status: 'pending'
      });
      setNewQuestion('');
      setSubmitMessage('Your question has been submitted successfully!');
      
      // Refresh FAQs
      const q = showAll
        ? query(collection(db, 'questions'), orderBy('createdAt', 'desc'))
        : query(collection(db, 'questions'), orderBy('createdAt', 'desc'), limit(5));
      const querySnapshot = await getDocs(q);
      const faqList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as FAQ[];
      setFaqs(faqList);

      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      console.error('Error adding document:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitComment = async (faqId: string) => {
    if (!newComment.trim()) {
      setSubmitMessage('Please enter a comment');
      return;
    }

    try {
      setIsSubmitting(true);
      await addDoc(collection(db, `questions/${faqId}/comments`), {
        text: newComment,
        createdAt: serverTimestamp()
      });
      setNewComment('');
      setSubmitMessage('Your comment has been posted successfully!');
      
      // Refresh comments
      await fetchComments(faqId);
      
      setTimeout(() => setSubmitMessage(''), 5000);
    } catch (error) {
      console.error('Error adding comment:', error);
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSeeMore = () => {
    setShowAll(true);
  };

  return (
    <div className="container mx-auto px-12 py-16">
      {/* Full-width Google-style Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="relative flex items-center bg-white rounded-full shadow-lg border border-gray-200 p-2 w-full">
          <Search className="w-6 h-6 text-gray-400 ml-4" />
          <textarea
            placeholder="Type your what if question..."
            className="w-full px-4 py-2 text-lg resize-none outline-none rounded-full min-h-[48px] bg-transparent"
            value={newQuestion}
            onChange={handleQuestionChange}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={submitQuestion}
            disabled={isSubmitting}
            className={`bg-blue-500 text-white px-6 py-2 rounded-full font-semibold transition-all
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          >
            {isSubmitting ? 'Posting...' : 'Post'}
          </motion.button>
        </div>
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
      </motion.div>

      <div className="bg-syw-yellow rounded-3xl overflow-hidden grid md:grid-cols-2">
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

        <div className="p-12">
          {/* Scrollable Question List */}
          <div className="max-h-[500px] overflow-y-auto pr-4">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="mb-4">
                <motion.button
                  onClick={() => toggleQuestion(index, faq.id)}
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
                        <div className="mb-4">
                          <h4 className="font-semibold">Comments:</h4>
                          {comments.length > 0 ? (
                            comments.map(comment => (
                              <div key={comment.id} className="mt-2 text-gray-700">
                                {comment.text}
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-700">No comments yet.</p>
                          )}
                        </div>
                        <div className="mt-4">
                          <textarea
                            placeholder="Add a comment..."
                            className="w-full px-4 py-2 text-lg resize-none outline-none min-h-[80px] rounded-lg border border-gray-300"
                            value={newComment}
                            onChange={handleCommentChange}
                          />
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => submitComment(faq.id)}
                            disabled={isSubmitting}
                            className={`mt-2 px-6 py-2 rounded-lg font-semibold 
                              bg-syw-yellow text-dark-gray transition-all
                              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-syw-yellow-600'}`}
                          >
                            {isSubmitting ? 'Posting...' : 'Post Comment'}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          {!showAll && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSeeMore}
              className="mt-6 flex px-8 self-center items-center justify-center bg-syw-yellow-400 text-black py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
            >
              See more
            </motion.button>
          )}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-4 text-gray-500 text-sm"
      >
        Share your thought-provoking questions Lorem ipsum dolor sit amet.
      </motion.p>
    </div>
  );
};

export default FAQSection;