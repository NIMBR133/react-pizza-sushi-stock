import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import 'swiper/swiper.scss'
import slide1 from './../../img/slider/1.jpg'
import slide2 from './../../img/slider/2.jpg'
import slide3 from './../../img/slider/3.jpg'
import './Slider.scss'
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider = () => {
    return (
        <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}
            spaceBetween={10}
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}
            pagination={{
                "clickable": true
            }}
            navigation={true}
            className="slider"
            loop={true}>
                <SwiperSlide><img src={slide1} alt="Слайдер" /></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="Слайдер" /></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="Слайдер" /></SwiperSlide>
        </Swiper>
    )
}

export default Slider