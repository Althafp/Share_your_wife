import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Headphones, 
  Speaker 
} from 'lucide-react';

const podcastEpisodes = [
  {
    id: 1,
    title: "Blockchain Revolution",
    description: "Exploring the transformative power of decentralized technologies",
    duration: "54:32",
    imageUrl: "https://placehold.co/800x600",
    tags: ["Web3", "Blockchain", "Innovation"],
    guests: ["Alex Thompson", "Sarah Chen"]
  },
  {
    id: 2,
    title: "AI & Ethical Frontiers",
    description: "Navigating the complex landscape of artificial intelligence ethics",
    duration: "1:12:45",
    imageUrl: "https://placehold.co/800x600",
    tags: ["AI", "Ethics", "Technology"],
    guests: ["Dr. Elena Rodriguez", "Marcus Wong"]
  },
  {
    id: 3,
    title: "Crypto Horizons",
    description: "Deep dive into the future of cryptocurrency and digital economies",
    duration: "47:18",
    imageUrl: "https://placehold.co/800x600",
    tags: ["Crypto", "Economics", "Digital Finance"],
    guests: ["Jamie Roberts", "Kim Park"]
  }
];

const HeroSection = () => {
  const [currentEpisode, setCurrentEpisode] = useState(0);

  const nextEpisode = () => {
    setCurrentEpisode((prev) => (prev + 1) % podcastEpisodes.length);
  };

  const prevEpisode = () => {
    setCurrentEpisode((prev) => (prev - 1 + podcastEpisodes.length) % podcastEpisodes.length);
  };

  const episode = podcastEpisodes[currentEpisode];

  return (
    <div className="min-h-screen pb-16 pt-8 flex flex-col justify-center items-center text-center bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-syw-yellow-200 to-syw-yellow-400 
        [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_100%)]"></div>
      </div>

      {/* Tagline & Subline */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl px-4 z-10"
      >
        <h1 className="text-6xl font-bold text-dark-gray mb-6">
          SHARE YOUR <br />
          <span className="text-syw-yellow">What If Experiences</span>
        </h1>

        <p className="text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
        Where ‘What If’ Becomes ‘What’s Next’.
        </p>
      </motion.div>

      {/* Episode Carousel */}
      <div className="w-full max-w-5xl px-4 z-10">
        <div className="relative">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevEpisode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-syw-yellow/80 hover:bg-syw-yellow 
            rounded-full p-2 shadow-lg"
          >
            <ChevronLeft size={32} />
          </motion.button>
          <motion.button
            onClick={nextEpisode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-syw-yellow/80 hover:bg-syw-yellow 
            rounded-full p-2 shadow-lg"
          >
            <ChevronRight size={32} />
          </motion.button>

          {/* Episode Card */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={episode.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 
              border border-gray-100"
            >
              {/* Episode Image */}
              <div className="aspect-video md:aspect-square">
                <img 
                  src={episode.imageUrl} 
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Episode Details */}
              <div className="p-8 flex flex-col justify-center items-center text-center">
                <div className="flex items-center mb-4 space-x-3 ">
                  <Headphones className="text-syw-yellow" size={24} />
                  <span className="text-sm text-gray-600">{episode.duration}</span>
                </div>

                <h2 className="text-3xl font-bold text-dark-gray mb-4">
                  {episode.title}
                </h2>

                <p className="text-gray-700 mb-6">
                  {episode.description}
                </p>

                {/* Tags */}
                <div className="flex space-x-2 mb-6">
                  {episode.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-syw-yellow-400 text-yellow-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Guests */}
                <div className="mb-6">
                  <h4 className="text-sm text-gray-600 mb-2">Featured Guests</h4>
                  <div className="flex space-x-2">
                    {episode.guests.map(guest => (
                      <span 
                        key={guest}
                        className="bg-gray-100 text-dark-gray px-3 py-1 rounded-full text-sm"
                      >
                        {guest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-syw-yellow text-dark-gray px-6 py-3 rounded-full 
                    font-semibold flex items-center space-x-2 hover:bg-syw-yellow-600 transition-colors"
                  >
                    <Play className="mr-2" /> Listen Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-syw-yellow text-dark-gray px-6 py-3 
                    rounded-full font-semibold flex items-center space-x-2 hover:bg-syw-yellow-600"
                  >
                    <Speaker className="mr-2" /> Preview
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;