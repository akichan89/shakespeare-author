import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className="bookPreview">
                    <img src="../img-01.jpg" />
                </div>
                <div className="bookPreview">
                    <img src="../img-02.jpg" />
                </div>
                <div className="bookPreview">
                    <img src="../img-03.jpg" />
                </div>
            </Carousel>
        </div>
    );
}