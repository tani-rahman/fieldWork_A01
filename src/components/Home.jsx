import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import FeaturesSection from './Feature';
import ContactSection from './Contact';
import PricingPage from './Pricing';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services/>
            <FeaturesSection/>
            <Testimonials/>
            <Portfolio/>
            <PricingPage/>
            <ContactSection/>
        </div>
    );
};

export default Home;