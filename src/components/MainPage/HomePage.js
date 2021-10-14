import React from 'react'
import Posters from './Posters.js'
import Header from './Header.js'
import InspiredSection from './InspiredSection.js'
import Speakersdet from './Speakersdet.js'
import Stream from './Stream.js'
import Contact from './Contact.js'
import Sheduler from './Sheduler.js'
import Footer from './Footer.js'
import Shedule from './Shedule.js'

function HomePage() {
    return (
        <div>
            <Header />
            <InspiredSection />
            <Speakersdet />
            <Posters />
            <Stream />
            <Contact />
            <Sheduler />
            <Shedule />
            <Footer />
        </div>
    )
}

export default HomePage
