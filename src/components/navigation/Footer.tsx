import { motion } from 'framer-motion';
import { logo } from '../../assets';
import { FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com" },
  { icon: <FaInstagram />, label: "Instagram", href: "https://instagram.com" },
  { icon: <FaYoutube />, label: "YouTube", href: "https://youtube.com" },
  { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/1234567890" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full 
          bg-gradient-to-br from-yellow-500 to-transparent 
          [background-size:100px_100px] 
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_100%)]">
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block">
            <img src={logo} alt="Share Your Wife" className="h-24 mx-auto" />
          </div>

          <div className="mt-8 text-gray-400 text-sm">
            © 2025 Share Your Wife. All Rights Reserved by 99thFloor.
          </div>
          
        </motion.div>

        {/* Bottom Left: Social Icons */}
        <div className="absolute bottom-4 left-4 flex space-x-6">
          {socialLinks.map(({ icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative text-white hover:text-yellow-400 transition-colors text-3xl"
            >
              {icon}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                {label}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Bottom Right: Developers Section */}
         <div className="absolute bottom-4 right-4 text-right">

            <div className="flex items-center justify-end mb-2">
              
              <p className="text-sm font-bold text-yellow-400 tracking-wide">DEVELOPERS</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-end group">
                
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">Altaf Patan</p>
              </div>
              <div className="flex items-center justify-end group">
               
                <p className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">Amisha Kumari</p>
              </div>
            </div>
          </div>
        </div>
 
    </footer>
  );
};

export default Footer;