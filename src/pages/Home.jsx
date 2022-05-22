import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../components/Services'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import FeaturedRoom from '../components/FeaturedRoom'



const Home = () => {
    return (
        <>
            <Hero>
                <Banner
                    title="luxurious rooms"
                    subtitle="deluxe rooms starting at $299"
                >
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom />
        </>
    )
}

export default Home