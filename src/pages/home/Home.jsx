import React from 'react';
import Banner from './Banner';
import ParallaxZoomVideo from './ParallaxZoomVideo';
import { motion } from "framer-motion";
import ScrollHorizontalComponents from './ScrollHorizontalComponents';
import StarSection from './StarSection';
import AchievementsSection from './AchievementsSection';
import AboutSection from './AboutSection';
import TimelineSection from './TimelineSection';
import NILAgencyTiles from './NILAgencyTiles';
import PartnersSection from './PartnersSection';
import FeaturedSection from './FeaturedSection';
import ScrollHorizontalComponentsAnother from './ScrollHorizontalComponentsAnother';
import PartnersSectionAnother from './PartnersSectionAnother';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

 
const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.querySelector(location.state.scrollTo);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100); // wait for DOM render
            }
        }
    }, [location.state]);
    return (
        <div className=''>



            <Banner></Banner>
            {/* <ParallaxZoomVideo></ParallaxZoomVideo> */}
            <ScrollHorizontalComponents></ScrollHorizontalComponents>
            <NILAgencyTiles></NILAgencyTiles>
            
            <PartnersSection></PartnersSection>
            <ScrollHorizontalComponentsAnother></ScrollHorizontalComponentsAnother>
            <PartnersSectionAnother></PartnersSectionAnother>
            <FeaturedSection></FeaturedSection>
            <AchievementsSection></AchievementsSection>
            {/* <AboutSection></AboutSection> */}
            {/* <TimelineSection></TimelineSection> */}

            {/* <StarSection></StarSection> */}

        </div >
    );
};

export default Home;