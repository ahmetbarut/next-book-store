"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function CustomPagingSlider({sliders, imageStyle} : {sliders: string[], imageStyle: string}) {
    const settings = {
        customPaging: function(i) {

            const sliderUrl = sliders[i];

            return (
                <a>
                    <Image width={10} height={10} className="" alt={sliderUrl} src={sliderUrl} />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb gap-2 flex !-bottom-8",
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {sliders.map((slider, index) => (
                    <div key={index} className={imageStyle ?? "w-full h-80"}>
                        <Image width={100} height={100} alt={slider} src={slider} className="w-full h-full" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}