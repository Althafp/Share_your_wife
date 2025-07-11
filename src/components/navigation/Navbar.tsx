import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { logo } from '../../assets';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-4">
            <div className="bg-white rounded-2xl shadow-lg">
                <div className="container mx-auto flex justify-between items-center px-2 py-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2 -ml-6"
                    >
                        <img src={logo} alt="Share Your Wife" className="h-16" />
                    </motion.div>

                    <div className="hidden md:flex space-x-8 text-lg items-center">
                        {['Home', 'Podcasts', 'About', 'FAQs'].map((item) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                whileHover={{ scale: 1.05 }}
                                className="text-black font-medium hover:underline underline-offset-8 transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}
                        
                        <motion.a
                            href="#join"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors ml-4"
                        >
                            Join Us
                        </motion.a>
                    </div>

                    <div className="md:hidden">
                        <Menu className="text-black" size={24} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;