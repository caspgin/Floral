import '../css/occasion.css';
import ocassion1 from '../assets/photos/Occasion_1.jpg';
import ocassion2 from '../assets/photos/occasion_2.jpeg';
import ocassion3 from '../assets/photos/occasion_3.jpeg';
import ocassion4 from '../assets/photos/occasion_4.jpeg';
import ocassion5 from '../assets/photos/occasion_5.jpeg';

export function Occasion() {
    return (
        <section id="occasion">
            <h2>Shop by Occasion</h2>
            <div className="image-area">
                <div className="product_element">
                    <div>
                        <img src={ocassion1} alt="" loading="lazy" />
                    </div>
                    <div>For all Occasions</div>
                </div>
                <div className="product_element">
                    <div>
                        <img src={ocassion2} alt="" loading="lazy" />
                    </div>

                    <div>Birthday</div>
                </div>
                <div className="product_element">
                    <div>
                        <img src={ocassion3} alt="" loading="lazy" />
                    </div>
                    <div>New Baby</div>
                </div>
                <div className="product_element">
                    <div>
                        <img src={ocassion4} alt="" loading="lazy" />
                    </div>
                    <div>Condolences</div>
                </div>
                <div className="product_element">
                    <div>
                        <img src={ocassion5} alt="" loading="lazy" />
                    </div>
                    <div>Graduations</div>
                </div>
            </div>
            <div className="btn">
                <a
                    href="https://www.passionfloralboutique.net/"
                    aria-label="link to online shop of passion floral"
                    target="_blank"
                >
                    Shop
                    <span className="material-symbols-outlined">
                        open_in_new
                    </span>
                </a>
            </div>
        </section>
    );
}
