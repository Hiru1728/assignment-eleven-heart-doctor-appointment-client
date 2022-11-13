import React from 'react';
import img1 from '../../../assets/sliderImage/img1.jpg';
import img2 from '../../../assets/sliderImage/img2.webp';
import img3 from '../../../assets/sliderImage/img3.jpg';
import img4 from '../../../assets/sliderImage/img4.jpg';
import SlideShow from './SlideShow';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        }

    ]
    return (
        <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <SlideShow
                    key={slide.id}
                    slide={slide}
                ></SlideShow>)
            }
        </div>
    );
};

export default Banner;