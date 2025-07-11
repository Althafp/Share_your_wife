import React from 'react';
import { FAQSection, HeroSection, TrustedPartners, UpcomingEvents , FAQ ,Scrollarrow, Hero} from '../components';

const Home: React.FC = () => {
    return (
        <>
         <Hero/>
        <div className='pt-24'>
           

            <HeroSection />
            <TrustedPartners />
            <FAQSection />
            <UpcomingEvents />
            <FAQ/>
            <Scrollarrow />

            
        </div>
        </>
    );
};

export default Home;