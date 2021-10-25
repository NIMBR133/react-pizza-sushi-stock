import React from 'react'
import Slider from '../../Components/Slider/Slider';

import './Home.scss'
import MenuSection from './MenuSection/MenuSection';


const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Slider />
                <MenuSection />
            </div>
        </div>
    )
}

export default Home