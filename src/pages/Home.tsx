import React from 'react';
import { FAQSection, HeroSection, TrustedPartners } from '../components';

const Home: React.FC = () => {
    return (
        <div className='pt-24'>
            <HeroSection />
            <TrustedPartners />
            <FAQSection />
        </div>
    );
};

export default Home;