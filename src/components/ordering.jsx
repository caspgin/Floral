import '../css/ordering.css';
export function Ordering() {
    return (
        <section id="ordering">
            <div className="info">
                <h2 className="title">How to Order?</h2>

                <div>
                    <div>
                        <div>
                            <span class="material-symbols-outlined">call</span>
                            <p>604-540-8328</p>
                        </div>
                        <div>
                            <span class="material-symbols-outlined">mail</span>
                            <p>info@passionfloral.ca</p>
                        </div>
                        <a
                            href="https://www.passionfloralboutique.net/"
                            target="_blank"
                        >
                            <span className="material-symbols-outlined">
                                shopping_bag
                            </span>
                            <p>Shop</p>
                        </a>
                        <div>
                            <span className="material-symbols-outlined">
                                directions_walk
                            </span>
                            <p>Walk-In</p>
                        </div>
                    </div>

                    <div className="customerInfo">
                        <div>Information needed for ordering</div>
                        <ul>
                            <li>
                                <span className="material-symbols-outlined">
                                    id_card
                                </span>
                                <p>Recipeint's name</p>
                            </li>
                            <li>
                                <span className="material-symbols-outlined">
                                    home
                                </span>
                                <p>Address</p>
                            </li>
                            <li className="diff">
                                <div>
                                    <span className="material-symbols-outlined">
                                        phone_iphone
                                    </span>
                                    <p>Phone Number</p>
                                </div>
                                <div>
                                    <p>
                                        Home and cell both phone number please.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <span class="material-symbols-outlined">
                                    celebration
                                </span>
                                <p className="occ">Occasion</p>
                            </li>
                            <li className="diff">
                                <div>
                                    <span className="material-symbols-outlined">
                                        sticky_note
                                    </span>
                                    <p>Card Message</p>
                                </div>
                                <div>
                                    <p>
                                        The character limit matches what fits on
                                        a business card.
                                    </p>
                                </div>
                            </li>
                            <li className="diff">
                                <div>
                                    <span className="material-symbols-outlined">
                                        point_of_sale
                                    </span>
                                    <p>Payment Info</p>
                                </div>
                                <div>
                                    <p>
                                        <span className="material-symbols-outlined">
                                            credit_card
                                        </span>
                                        Credit card or e-transfer information.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="delivery">
                <div className="delivery_anim">
                    <button className="order animate">
                        <div class="box"></div>
                        <div class="truck">
                            <div class="back"></div>
                            <div class="front">
                                <div class="window"></div>
                            </div>
                            <div class="light top"></div>
                            <div class="light bottom"></div>
                        </div>
                        <div class="lines"></div>
                    </button>
                </div>
                <div className="content">
                    <div>Same day Delivery*</div>
                    <p>*Only on orders placed before noon</p>
                    <p>
                        *Delivery fee depends on the distance. Please contact
                        for rates.
                    </p>
                </div>
            </div>
        </section>
    );
}
