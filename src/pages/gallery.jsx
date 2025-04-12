import { useEffect, useRef } from 'react';
import '../css/gallery.css';
const imageModules = import.meta.glob('../assets/photos/*.{png,jpg,jpeg,svg}', {
    eager: true,
});

const images = Object.values(imageModules).map((module) => module.default);
export const Gallery = () => {
    useEffect(() => {
        const i = document.getElementsByClassName('i');
    }, []);
    return (
        <section id="gallery">
            <div className="gallery">
                {images.map((src, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={src} className="i" />
                    </div>
                ))}
            </div>
        </section>
    );
};
