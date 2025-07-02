import React from 'react'
import Hero from './Hero'
import FeaturesSection from './Features'
import CounterSection from './CounterSection'
import VideoInfoSection from './VideoInfoSection'
import PrecisionEngineeringSection from './PrecisionEngineeringSection'
import ContactSection from './ContactSection'

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturesSection />
            <CounterSection />
            <VideoInfoSection />
            <PrecisionEngineeringSection />
            <ContactSection />
        </>
    )
}

export default Home