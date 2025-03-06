import React from 'react';
import { FAQSection, HeroSection, TrustedPartners, UpcomingEvents } from '../components';

const Home: React.FC = () => {
    return (
        <div className='pt-24'>
            <HeroSection />
            <TrustedPartners />
            <FAQSection />
            <UpcomingEvents />
        </div>
    );
};

export default Home;