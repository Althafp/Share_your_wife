import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';

const events = [
    {
        id: 1,
        title: "Web3 Summit 2025",
        date: "March 15, 2025",
        location: "San Francisco, CA",
        description: "Join us for the biggest Web3 event of the year",
        image: "https://placehold.co/600x400",
        attendees: 1200,
        category: "Conference"
    },
    {
        id: 2,
        title: "Blockchain Meetup",
        date: "April 2, 2025",
        location: "New York, NY",
        description: "Monthly meetup for blockchain enthusiasts",
        image: "https://placehold.co/600x400",
        attendees: 300,
        category: "Meetup"
    },
    {
        id: 3,
        title: "DeFi Workshop",
        date: "April 20, 2025",
        location: "London, UK",
        description: "Hands-on workshop on DeFi protocols",
        image: "https://placehold.co/600x400",
        attendees: 150,
        category: "Workshop"
    },
    {
        id: 4,
        title: "Crypto Exhibition",
        date: "May 5, 2025",
        location: "Tokyo, Japan",
        description: "Exhibition showcasing latest crypto innovations",
        image: "https://placehold.co/600x400",
        attendees: 800,
        category: "Exhibition"
    },
    {
        id: 5,
        title: "NFT Art Gallery",
        date: "May 15, 2025",
        location: "Paris, France",
        description: "Exclusive NFT art showcase and auction",
        image: "https://placehold.co/600x400",
        attendees: 400,
        category: "Exhibition"
    }
];

const UpcomingEvents = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    };

    const getVisibleEvents = () => {
        const right = (currentIndex + 1) % events.length;
        const left = (currentIndex - 1 + events.length) % events.length;
        return [left, currentIndex, right];
    };

    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">
                        Upcoming <span className="text-syw-yellow">Events</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join us at these exciting events where we discuss the future of technology
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative flex justify-center items-center h-[500px]">
                    {/* Navigation Buttons */}
                    <motion.button
                        onClick={prevSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute left-4 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                        onClick={nextSlide}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-4 z-30 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg"
                    >
                        <ChevronRight size={24} />
                    </motion.button>

                    {/* Events Cards */}
                    <div className="relative w-full flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            {getVisibleEvents().map((eventIndex, i) => (
                                <motion.div
                                    key={events[eventIndex].id}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: i === 1 ? 1 : 0.8,
                                        opacity: 1,
                                        x: (i - 1) * 500
                                    }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className={`absolute ${i === 1 ? 'z-20' : 'z-10'}`}
                                >
                                    <div className={`w-[400px] bg-white rounded-2xl shadow-2xl overflow-hidden
                    ${i === 1 ? 'transform-none' : 'opacity-50 blur-[1px]'}`}>
                                        <div className="relative h-48">
                                            <img
                                                src={events[eventIndex].image}
                                                alt={events[eventIndex].title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute top-4 right-4 bg-syw-yellow text-dark-gray px-4 py-1 rounded-full text-sm font-medium">
                                                {events[eventIndex].category}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-2xl font-bold mb-2">{events[eventIndex].title}</h3>
                                            <p className="text-gray-600 mb-4">{events[eventIndex].description}</p>
                                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <Calendar size={16} className="mr-1" />
                                                    {events[eventIndex].date}
                                                </div>
                                                <div className="flex items-center">
                                                    <MapPin size={16} className="mr-1" />
                                                    {events[eventIndex].location}
                                                </div>
                                            </div>
                                            {i === 1 && (
                                                <motion.button
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    className="mt-6 w-full bg-syw-yellow text-dark-gray py-3 rounded-xl
                          font-semibold hover:bg-syw-yellow-600 transition-colors flex items-center justify-center space-x-2"
                                                >
                                                    <Users size={18} />
                                                    <span>Join {events[eventIndex].attendees}+ Attendees</span>
                                                </motion.button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center space-x-2 mt-8">
                    {events.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-syw-yellow w-6' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;