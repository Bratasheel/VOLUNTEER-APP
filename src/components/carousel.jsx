import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselSection = () => {
    return (
        <div>

            <section className="carousel-section">
                <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} interval={3500} transitionTime={2000} showStatus={false} showIndicators={false}>
                <div>
                    <img src="images/volunteer1.jpeg" alt="Image 1" />
                </div>
                <div>
                    <img src="images/volunteer2.jpeg" alt="Image 2" />
                </div>
                <div>
                    <img src="images/volunteer3.jpeg" alt="Image 3" />
                </div>
                <div>
                    <img src="images/volunteer4.jpeg" alt="Image 4" />
                </div>
                </Carousel>
            </section>
        </div> 
    );
};

export default CarouselSection;