import '../css/special_occasion.css';
import weddingImg from '../assets/photos/wedding.jpg';
import corpImg from '../assets/photos/corporate.jpeg';
export function SpecialOccasion() {
    return (
        <section id="special_occ">
            <div className="wedding">
                <div>
                    <img src={weddingImg} alt="" srcset="" />
                </div>
                <div>
                    <div> Wedding Orders</div>
                    <div>
                        <span>Free half hour consultation</span>
                        <ul>
                            <li>
                                <p> Please book an appointment </p>
                            </li>
                            <li>
                                <p>
                                    Please bring some pictures or inspiration
                                    material to have a better understanding.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="corporate">
                <div>
                    <img src={corpImg} alt="" srcset="" />
                </div>

                <div>
                    <div>Corporate Orders</div>
                    <div>
                        <span>Weekly plan for your office</span>
                        <ul>
                            <li>
                                <p> Please call to discuss.</p>
                            </li>
                            <li>
                                <p> Rental vases available.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
