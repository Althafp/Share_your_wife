//import React from 'react';
import { motion } from 'framer-motion';

const TrustedPartners = () => {
  const partners = [
    { id: 1, name: "Microsoft", placeholder: true },
    { id: 2, name: "Airbnb", placeholder: true },
    { id: 3, name: "Amazon", placeholder: true },
    { id: 4, name: "Blume", placeholder: true },
    { id: 5, name: "YouTube", placeholder: true },
    { id: 6, name: "Adobe", placeholder: true }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-dark-gray mb-4">
            Trusted By <span className="text-yellow-500">Industry Leaders</span>
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our podcast has been featured and trusted by innovative companies pushing the boundaries of technology.
          </p> */}
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              {partner.placeholder ? (
                <div className="w-40 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 font-bold">{partner.name}</span>
                </div>
              ) : (
                <img 
                  src={`/logos/${partner.name.toLowerCase()}.svg`} 
                  alt={partner.name} 
                  className="h-16 w-auto"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;