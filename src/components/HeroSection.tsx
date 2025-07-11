import { motion } from "framer-motion";
import {  FaHeadphones, FaUsers} from "react-icons/fa";
import { SiSpotify } from "react-icons/si";
import { logo,ourLogo } from '../assets';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleLearnMoreClick = () => {
    const subHeadingElement = document.getElementById("SubHeading");
    if (subHeadingElement) {
      const offset = 32;
      const elementPosition = subHeadingElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-gradient-to-bl from-black via-indigo-900 to-indigo-800">
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center px-8 sm:px-6 md:px-8 lg:px-16 pt-16 pb-8 md:pt-24 md:pb-16 gap-8 md:gap-12">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center max-md:items-center max-md:text-center space-y-4 md:space-y-6 md:pr-12 md:pl-8 relative z-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        ><span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold md:font-black text-pink-600 leading-tight"
          >Powered By 99<sup className="text-white">th</sup>Floor</h1>
          <div className="hidden max-md:flex absolute inset-0 opacity-10 z-[-1]">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 50 Q25 30 50 50 T100 50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                className="text-yellow-400"
              />
              <path
                d="M0 40 Q25 20 50 40 T100 40"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-yellow-400"
              />
              <path
                d="M0 60 Q25 40 50 60 T100 60"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                className="text-yellow-400"
              />
            </svg>
          </div>
          </span>

          <motion.h1
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold md:font-black text-white leading-tight"
          >
            Where Stories Meet
            <span className="text-yellow-400"> Sound</span>
            <span>
<div className="absolute inset-0 flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scaleY: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  className="w-1 bg-yellow-400 mx-1 rounded-full"
                  style={{
                    height: `${20 + i * 10}px`,
                  }}
                />
              ))}
            </div>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-300 py-2"
          >
            Dive into captivating conversations, inspiring stories, and thought-provoking discussions. 
            Join our growing community of listeners who crave authentic content.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 sm:gap-4"
          >
            
            <button
              className="px-4 sm:px-8 py-2.5 sm:py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transform hover:scale-105 transition-all text-sm sm:text-base"
              onClick={handleLearnMoreClick}
            >
              Explore Episodes
            </button>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap items-center max-md:justify-center gap-2 md:gap-4 sm:gap-8 pt-4"
          >
            {[
              { icon: FaUsers, text: "10K+ Listeners" },
              { icon: FaHeadphones, text: "50+ Episodes" },
              { icon: SiSpotify, text: "Weekly Releases" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-2"
              >
                <item.icon className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Sound Wave Pattern Overlay */}
          
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="hidden md:flex w-full md:w-1/3 lg:w-1/2 h-[300px] sm:h-[400px] md:h-full items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Animated Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateZ: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            />
            <motion.div
              animate={{
                y: [-20, 20, -20],
                x: [10, -10, 10],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-40"
            />

             <div className="relative flex items-center justify-center space-x-8 mt-38">
      {/* Logo 1 */}
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="w-32 h-48"
      >
        <img
          src={logo}
          alt="Logo 1"
          className="w-full h-full opacity-80 object-contain"
        />
      </motion.div>

      {/* Collaboration Symbol (X or SVG) */}
      <div className="text-white text-4xl font-bold opacity-70">×</div>

      {/* Logo 2 */}
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="w-32 h-52"
      >
        <img
          src={ourLogo}
          alt="Logo 2"
          className="w-full h-full opacity-80 object-contain"
        />
      </motion.div>
    </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;