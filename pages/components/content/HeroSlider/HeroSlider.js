import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HeroSlider.module.css";

const HeroSlider = () => {
    const slides = [
        {
            image: "/images/temple1.jpg",
            title: "Temple Constuction Starts soon",
            description: "5 Acre beautiful land for our magnificent temple land purchased - 14 Hasketts Road, Templeton.",
            cta: "Donate Now",
            link: "/donate-now",
        },
        {
            image: "/images/temple2.jpg",
            title: "Become Maha Punyadhaari of the Temple by donating $3,500 per square meter",
            description: "Become Maha Punyadhaari of the Temple and your name will go on the golden plaque on Temple wall -  Donate $3500 or $51 per week.",
            cta: "Donate Now",
            link: "/donate-now",
        },
        {
            image: "/images/temple3.jpg",
            title: "Donate a Moorti (Vigraha Daan)",
            description: "Minimum donation for the Vigraha Daan​ is Five thousand dollar ($5,000)",
            cta: "Donate Now",
            link: "/donate-now",
        },
        {
            image: "/images/temple4.jpg",
            title: "Hindu Culture Centre",
            description: "Donate a Square Meter of the temple </br>Donate $51 per week for 12 Months – MAHA PUNYADHARI </br>It will cost $3500 per square meter to build this temple.",
            cta: "Donate Now",
            link: "/donate-now",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <section className={styles.heroSlider}>
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div
                            className={styles.heroSlide}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className={styles.heroContent}>
                                <h1>{slide.title}</h1>
                                <p dangerouslySetInnerHTML={{ __html: slide.description }} />
                                <a href={slide.link} className={styles.heroBtn}>
                                    {slide.cta}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default HeroSlider;