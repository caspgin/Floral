import { useEffect, useState } from 'react';
import '../css/carousel.css';
import Flower1 from '../assets/photos/carousel_1.jpg';
import Flower2 from '../assets/photos/carousel_2.png';
import Flower3 from '../assets/photos/carousel_3.jpg';
import Flower4 from '../assets/photos/carousel_4.jpg';
import Header from '../assets/photos/PassionFloral72.jpg';

export function Hero() {
    const slides = [Flower1, Flower2, Flower3, Flower4];
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 30000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section id="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateY(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-item">
                        <img src={slide} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <div className="btns">
                <button className="prev-btn" onClick={handlePrev}>
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                </button>
                <button className="next-btn" onClick={handleNext}>
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
                </button>
            </div>
            <div className="header">
                {
                    // <img src={Header} alt="title image" />
                }
                <h1>Passion Floral</h1>
            </div>
            <div className="shop">
                <a
                    href="https://www.passionfloralboutique.net/"
                    target="_blank"
                >
                    Shop all
                </a>
            </div>
        </section>
    );
}
