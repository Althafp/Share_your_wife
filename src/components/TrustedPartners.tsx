import { useState, useEffect } from 'react';

// ✅ Import local logos
import aptosLogo from "../assets/imgs/companies/APTOS.jpg";
import fliq from "../assets/imgs/companies/FLIQ.jpeg";
import orbitx from "../assets/imgs/companies/Orbitx.jpeg";
import p2p from "../assets/imgs/companies/P2P.jpeg";
import polkadot from "../assets/imgs/companies/polkadotimg.jpeg";
import skate from "../assets/imgs/companies/skateimg.jpeg";
import vara from "../assets/imgs/companies/VARA.jpeg";

const TrustedPartners = () => {
  const partners = [
    { id: 1, name: "APTOS", logo: aptosLogo },
    { id: 2, name: "FLIQ", logo: fliq },
    { id: 3, name: "OrbitX", logo: orbitx },
    { id: 4, name: "P2P", logo: p2p },
    { id: 5, name: "Polkadot", logo: polkadot },
    { id: 6, name: "Skate", logo: skate },
    { id: 7, name: "VARA", logo: vara }
  ];


  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= partners.length) {
            return 0;
          }
          return prev + 1;
        });
      }, 2000); // Move every 2 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, partners.length]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Trusted By <span className="text-yellow-500">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our podcast has been featured and trusted by innovative companies pushing the boundaries of technology.
          </p>
        </div>

        <div className="relative">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (200)}px)`,
              width: `${duplicatedPartners.length * 200}px`
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 w-48 mx-4"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="group cursor-pointer">
                  <div className="w-40 h-28 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 grayscale group-hover:grayscale-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-40 text-center mt-3">
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-yellow-500 transition-colors duration-300">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index || (currentIndex >= partners.length && index === 0)
                  ? 'bg-yellow-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;